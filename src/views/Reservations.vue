<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useReservationStore } from '../stores/reservationStore';
import { useCamperStore } from '../stores/camperStore';

const reservationStore = useReservationStore();
const camperStore = useCamperStore();

// Estado para el formulario de búsqueda
const searchEmail = ref('');
const searchPhone = ref('');
const isSearching = ref(false);
const searchResults = ref<any[]>([]);

// Estado para mostrar el modal de cancelación
const showCancelModal = ref(false);
const reservationToCancel = ref<any>(null); // Usamos any temporalmente para evitar errores de tipo
const cancelReason = ref('');
const cancelError = ref('');

// Cargar datos necesarios
onMounted(async () => {
  await camperStore.fetchCampers();
  await reservationStore.loadReservations();
});

// Método para buscar reservas
const searchReservations = () => {
  if (!searchEmail.value && !searchPhone.value) {
    // Si no hay criterios de búsqueda, mostrar todas las reservas
    searchResults.value = [];
    return;
  }
  
  isSearching.value = true;
  
  try {
    // Filtrar reservas por email o teléfono
    searchResults.value = reservationStore.reservations.filter(reservation => {
      const matchEmail = searchEmail.value && 
        reservation.customerEmail?.toLowerCase().includes(searchEmail.value.toLowerCase());
      
      const matchPhone = searchPhone.value && 
        reservation.customerPhone?.includes(searchPhone.value);
      
      return matchEmail || matchPhone;
    });
  } catch (error) {
    console.error('Error al buscar reservas:', error);
    searchResults.value = [];
  } finally {
    isSearching.value = false;
  }
};

// Método para mostrar el modal de cancelación
const openCancelModal = (reservation: any) => {
  if (!reservation || !reservation.id) {
    console.error('Reserva inválida');
    return;
  }
  reservationToCancel.value = reservation;
  showCancelModal.value = true;
  cancelReason.value = '';
  cancelError.value = '';
};

// Método para cancelar una reserva
const confirmCancelReservation = async () => {
  if (!cancelReason.value) {
    cancelError.value = 'Por favor, indica el motivo de la cancelación';
    return;
  }
  
  if (!reservationToCancel.value || !reservationToCancel.value.id) {
    cancelError.value = 'Reserva inválida';
    return;
  }
  
  try {
    await reservationStore.cancelReservation(reservationToCancel.value.id, cancelReason.value);
    showCancelModal.value = false;
    reservationToCancel.value = null;
    
    // Actualizar los resultados de búsqueda
    searchReservations();
  } catch (error) {
    cancelError.value = 'Error al cancelar la reserva. Inténtalo de nuevo.';
    console.error('Error al cancelar reserva:', error);
  }
};

// Método para cerrar el modal
const closeCancelModal = () => {
  showCancelModal.value = false;
  reservationToCancel.value = null;
  cancelReason.value = '';
  cancelError.value = '';
};

// Método para obtener el nombre del camper
const getCamperName = (camperId: string) => {
  if (!camperId) return 'Camper no disponible';
  const camper = camperStore.campers.find(c => c.id === camperId);
  return camper ? camper.name : 'Camper no disponible';
};

// Formatear fecha
const formatDate = (dateString: string) => {
  if (!dateString) return 'Fecha no disponible';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return 'Fecha inválida';
  }
};

// Calcular el estado de la reserva
const getReservationStatus = (status: string) => {
  switch (status) {
    case 'active':
      return 'Activa';
    case 'cancelled':
      return 'Cancelada';
    default:
      return 'Desconocido';
  }
};

// Obtener el nombre del método de pago
const getPaymentMethodName = (method: string) => {
  switch (method) {
    case 'card':
      return 'Tarjeta de crédito';
    case 'apple-pay':
      return 'Apple Pay';
    case 'google-pay':
      return 'Google Pay';
    default:
      return method || 'No especificado';
  }
};
</script>

<template>
  <div class="reservations-container">
    <h1>Mis Reservas</h1>
    
    <div class="search-section">
      <h2>Buscar mis reservas</h2>
      <p>Introduce tu correo electrónico o número de teléfono para encontrar tus reservas.</p>
      
      <div class="search-form">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            v-model="searchEmail" 
            placeholder="tu@email.com"
          />
        </div>
        
        <div class="form-group">
          <label for="phone">Teléfono</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="searchPhone" 
            placeholder="123456789"
          />
        </div>
        
        <button 
          @click="searchReservations" 
          class="search-button" 
          :disabled="isSearching || (!searchEmail && !searchPhone)"
        >
          {{ isSearching ? 'Buscando...' : 'Buscar mis reservas' }}
        </button>
      </div>
    </div>
    
    <!-- Resultados de la búsqueda -->
    <div v-if="searchResults.length > 0" class="results-section">
      <h2>Tus reservas</h2>
      
      <div class="reservations-list">
        <div v-for="reservation in searchResults" :key="reservation.id" class="reservation-card">
          <div class="reservation-header">
            <h3>{{ getCamperName(reservation.camperId) }}</h3>
            <span :class="`status-badge ${reservation.status}`">
              {{ getReservationStatus(reservation.status) }}
            </span>
          </div>
          
          <div class="reservation-details">
            <p><strong>Fechas:</strong> {{ formatDate(reservation.startDate) }} - {{ formatDate(reservation.endDate) }}</p>
            <p><strong>Duración:</strong> {{ reservation.totalDays }} días</p>
            <p><strong>Precio total:</strong> {{ reservation.totalPrice }}€</p>
            <p><strong>Reservado por:</strong> {{ reservation.customerName }}</p>
            <p><strong>Contacto:</strong> {{ reservation.customerEmail }} | {{ reservation.customerPhone }}</p>
            <p><strong>Método de pago:</strong> {{ getPaymentMethodName(reservation.paymentMethod) }}</p>
            <p><strong>Fecha de reserva:</strong> {{ formatDate(reservation.createdAt) }}</p>
          </div>
          
          <div class="reservation-actions" v-if="reservation.status === 'active'">
            <button @click="openCancelModal(reservation)" class="cancel-button">
              Cancelar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mensaje cuando no hay resultados -->
    <div v-else-if="searchEmail || searchPhone" class="no-results">
      <p>No se encontraron reservas con los datos proporcionados.</p>
      <p>Asegúrate de introducir el mismo correo electrónico o teléfono que utilizaste al hacer la reserva.</p>
    </div>
    
    <!-- Modal de cancelación -->
    <div v-if="showCancelModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Cancelar Reserva</h3>
        
        <p>Estás a punto de cancelar tu reserva para <strong>{{ getCamperName(reservationToCancel?.camperId) }}</strong>.</p>
        <p>Fechas: {{ formatDate(reservationToCancel?.startDate) }} - {{ formatDate(reservationToCancel?.endDate) }}</p>
        
        <div class="form-group">
          <label for="cancelReason">Motivo de la cancelación</label>
          <textarea 
            id="cancelReason" 
            v-model="cancelReason" 
            placeholder="Por favor, indícanos el motivo de la cancelación"
            rows="4"
          ></textarea>
        </div>
        
        <div v-if="cancelError" class="error-message">
          <p>{{ cancelError }}</p>
        </div>
        
        <div class="modal-actions">
          <button @click="confirmCancelReservation" class="confirm-button">
            Confirmar cancelación
          </button>
          <button @click="closeCancelModal" class="back-button">
            Volver
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reservations-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.search-section {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.search-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  align-items: flex-end;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-button {
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 48px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.search-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.results-section {
  margin-top: 2rem;
}

.reservations-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.reservation-card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.reservation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.reservation-header {
  padding: 1.5rem;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--neutral-color);
}

.reservation-header h3 {
  margin: 0;
}

.status-badge {
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.status-badge.active {
  background-color: var(--success-color);
  color: var(--dark-color);
}

.status-badge.cancelled {
  background-color: var(--danger-color);
  color: var(--dark-color);
}

.reservation-details {
  padding: 1rem;
}

.reservation-details p {
  margin: 0.5rem 0;
}

.reservation-actions {
  padding: 1rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
}

.cancel-button {
  padding: 10px 18px;
  background-color: var(--danger-color);
  color: var(--dark-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cancel-button:hover {
  background-color: #FFABAB;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.no-results {
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2.5rem;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.confirm-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--danger-color);
  color: var(--dark-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.confirm-button:hover {
  background-color: #FFABAB;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.back-button {
  padding: 0.75rem 1.5rem;
  background-color: var(--neutral-color);
  color: var(--dark-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .search-form {
    grid-template-columns: 1fr;
  }
  
  .reservations-list {
    grid-template-columns: 1fr;
  }
}
</style>