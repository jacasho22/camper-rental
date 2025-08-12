import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// Definición de la interfaz para las reservas
export interface Reservation {
  id: string;
  camperId: string;
  camperName: string; // Para mostrar información sin necesidad de cargar el camper completo
  camperImage: string; // Primera imagen del camper para mostrar en la lista de reservas
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: string; // Método de pago: 'card', 'apple-pay', 'google-pay'
  createdAt: Date;
  status: 'active' | 'cancelled';
  cancelReason?: string; // Motivo de cancelación, opcional
}

export const useReservationStore = defineStore('reservation', () => {
  // Estado
  const reservations = ref<Reservation[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const activeReservations = computed(() => {
    return reservations.value.filter(reservation => reservation.status === 'active');
  });

  const cancelledReservations = computed(() => {
    return reservations.value.filter(reservation => reservation.status === 'cancelled');
  });

  // Cargar reservas desde localStorage al iniciar
  const loadReservations = async () => {
    try {
      const savedReservations = localStorage.getItem('camperReservations');
      if (savedReservations) {
        reservations.value = JSON.parse(savedReservations);
      }
    } catch (err) {
      console.error('Error loading reservations from localStorage:', err);
    }
  };

  // Guardar reservas en localStorage
  const saveReservations = () => {
    try {
      localStorage.setItem('camperReservations', JSON.stringify(reservations.value));
    } catch (err) {
      console.error('Error saving reservations to localStorage:', err);
    }
  };

  // Crear una nueva reserva
  const createReservation = (reservationData: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => {
    loading.value = true;
    error.value = null;

    try {
      // Crear un nuevo objeto de reserva
      const newReservation: Reservation = {
        ...reservationData,
        id: uuidv4(),
        createdAt: new Date(),
        status: 'active'
      };

      // Añadir la reserva al array
      reservations.value.push(newReservation);
      
      // Guardar en localStorage
      saveReservations();

      return newReservation;
    } catch (err) {
      error.value = 'Error al crear la reserva';
      console.error('Error creating reservation:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Cancelar una reserva
  const cancelReservation = (reservationId: string, cancelReason?: string) => {
    loading.value = true;
    error.value = null;

    try {
      const reservationIndex = reservations.value.findIndex(r => r.id === reservationId);
      
      if (reservationIndex === -1) {
        throw new Error('Reserva no encontrada');
      }

      // Actualizar el estado de la reserva a 'cancelled'
      reservations.value[reservationIndex] = {
        ...reservations.value[reservationIndex],
        status: 'cancelled',
        cancelReason: cancelReason || 'No se proporcionó motivo'
      };
      
      // Guardar en localStorage
      saveReservations();

      return reservations.value[reservationIndex];
    } catch (err) {
      error.value = 'Error al cancelar la reserva';
      console.error('Error cancelling reservation:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // Obtener una reserva por ID
  const getReservationById = (reservationId: string) => {
    return reservations.value.find(r => r.id === reservationId) || null;
  };

  // Obtener reservas por camperId
  const getReservationsByCamperId = (camperId: string) => {
    return reservations.value.filter(r => r.camperId === camperId);
  };

  // Verificar si un camper está disponible en un rango de fechas
  const isCamperAvailable = (camperId: string, startDate: Date | string, endDate: Date | string, excludeReservationId?: string) => {
    // Convertir las fechas a objetos Date para comparación
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Filtrar las reservas activas para este camper
    const camperReservations = reservations.value.filter(r => 
      r.camperId === camperId && 
      r.status === 'active' &&
      (excludeReservationId ? r.id !== excludeReservationId : true)
    );
    
    // Verificar si hay alguna reserva que se solape con el rango de fechas solicitado
    const hasOverlap = camperReservations.some(reservation => {
      const reservationStart = new Date(reservation.startDate);
      const reservationEnd = new Date(reservation.endDate);
      
      // Comprobar si hay solapamiento
      return (
        (start >= reservationStart && start <= reservationEnd) || // La fecha de inicio está dentro de una reserva existente
        (end >= reservationStart && end <= reservationEnd) || // La fecha de fin está dentro de una reserva existente
        (start <= reservationStart && end >= reservationEnd) // La reserva existente está completamente dentro del rango solicitado
      );
    });
    
    // Si no hay solapamiento, el camper está disponible
    return !hasOverlap;
  };

  // Cargar las reservas al inicializar el store
  loadReservations();

  return {
    reservations,
    loading,
    error,
    activeReservations,
    cancelledReservations,
    loadReservations,
    createReservation,
    cancelReservation,
    getReservationById,
    getReservationsByCamperId,
    isCamperAvailable
  };
});