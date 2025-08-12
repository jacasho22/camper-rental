<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCamperStore } from '../stores/camperStore';
import { useAuthStore } from '../stores/authStore';
import { useReservationStore } from '../stores/reservationStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const camperStore = useCamperStore();
const authStore = useAuthStore();
const reservationStore = useReservationStore();
const { selectedCamper, loading, error } = storeToRefs(camperStore);
const { isAuthenticated, user } = storeToRefs(authStore);

const activeImageIndex = ref<number>(0);
const startDate = ref<string>('');
const endDate = ref<string>('');
const totalDays = ref<number>(0);
const totalPrice = ref<number>(0);
const bookingError = ref<string>('');
const bookingSuccess = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);

// Datos del cliente para reserva sin cuenta
const customerName = ref<string>('');
const customerEmail = ref<string>('');
const customerPhone = ref<string>('');

// Validación de formulario
interface FormErrors {
  name: string;
  email: string;
  phone: string;
  payment: string;
}

const formErrors = ref<FormErrors>({
  name: '',
  email: '',
  phone: '',
  payment: ''
});
const paymentMethod = ref<string>('');

onMounted(async () => {
  const camperId = route.params.id as string;
  await camperStore.fetchCamperById(camperId);
  await reservationStore.loadReservations();
  
  // Cargar las fechas ocupadas
  getOccupiedDates();
});

const setActiveImage = (index: number) => {
  activeImageIndex.value = index;
};

const calculateTotalDays = () => {
  if (startDate.value && endDate.value) {
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    
    // Validar fechas
    if (end <= start) {
      bookingError.value = 'La fecha de fin debe ser posterior a la fecha de inicio';
      totalDays.value = 0;
      totalPrice.value = 0;
      return;
    }
    
    // Calcular días
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    totalDays.value = diffDays;
    totalPrice.value = selectedCamper.value ? diffDays * selectedCamper.value.price : 0;
    bookingError.value = '';
  }
};

// Obtener todas las fechas ocupadas para este camper
const occupiedDates = ref<Date[]>([]);

// Función para obtener las fechas ocupadas
const getOccupiedDates = () => {
  if (!selectedCamper.value) return;
  
  // Obtener todas las reservas activas para este camper
  const camperReservations = reservationStore.reservations.filter(r => 
    r.camperId === selectedCamper.value!.id && 
    r.status === 'active'
  );
  
  // Crear un array con todas las fechas ocupadas
  const dates: Date[] = [];
  
  camperReservations.forEach(reservation => {
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    
    // Añadir todas las fechas entre start y end (inclusive)
    const currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });
  
  occupiedDates.value = dates;
};

// Verificar disponibilidad del camper para las fechas seleccionadas
const checkAvailability = () => {
  if (!startDate.value || !endDate.value || !selectedCamper.value) return true;
  
  return reservationStore.isCamperAvailable(
    selectedCamper.value.id,
    new Date(startDate.value),
    new Date(endDate.value)
  );
};

// Verificar si una fecha específica está ocupada
const isDateOccupied = (dateString: string): boolean => {
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0); // Normalizar la hora
  
  return occupiedDates.value.some(occupiedDate => {
    const occupied = new Date(occupiedDate);
    occupied.setHours(0, 0, 0, 0); // Normalizar la hora
    return date.getTime() === occupied.getTime();
  });
};

const isAvailable = computed(() => {
  if (!selectedCamper.value?.available) return false;
  if (!startDate.value || !endDate.value) return true;
  return checkAvailability();
});

// Validar el formulario de reserva
const validateForm = () => {
  let isValid = true;
  formErrors.value = {
    name: '',
    email: '',
    phone: '',
    payment: ''
  };
  
  if (!customerName.value.trim()) {
    formErrors.value.name = 'El nombre es obligatorio';
    isValid = false;
  }
  
  if (!customerEmail.value.trim()) {
    formErrors.value.email = 'El email es obligatorio';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(customerEmail.value)) {
    formErrors.value.email = 'El email no es válido';
    isValid = false;
  }
  
  if (!customerPhone.value.trim()) {
    formErrors.value.phone = 'El teléfono es obligatorio';
    isValid = false;
  } else if (!/^\d{9}$/.test(customerPhone.value.replace(/\s/g, ''))) {
    formErrors.value.phone = 'El teléfono debe tener 9 dígitos';
    isValid = false;
  }
  
  if (!paymentMethod.value) {
    formErrors.value.payment = 'Debes seleccionar un método de pago';
    isValid = false;
  }
  
  return isValid;
};

// Simular procesamiento de pago
const processPayment = (method: string, amount: number): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulación de procesamiento de pago
    console.log(`Procesando pago con método: ${method} por un monto de: ${amount}€`);
    setTimeout(() => {
      // Simulamos éxito en el pago
      resolve(true);
    }, 1500);
  });
};

const handleBooking = async () => {
  // Validar fechas
  if (!startDate.value || !endDate.value) {
    bookingError.value = 'Por favor, selecciona las fechas de inicio y fin';
    return;
  }
  
  if (totalDays.value <= 0) {
    bookingError.value = 'Por favor, selecciona fechas válidas';
    return;
  }
  
  if (!isAvailable.value) {
    bookingError.value = 'El camper no está disponible para las fechas seleccionadas';
    return;
  }
  
  // Si el usuario es administrador, no necesita completar el formulario
  if (!isAuthenticated.value || !user.value?.isAdmin) {
    // Validar formulario para usuarios no autenticados
    if (!validateForm()) {
      return;
    }
  }
  
  isSubmitting.value = true;
  bookingError.value = '';
  
  try {
    // Procesar el pago
    const paymentSuccess = await processPayment(paymentMethod.value, totalPrice.value);
    
    if (!paymentSuccess) {
      bookingError.value = 'Error al procesar el pago. Por favor, intenta con otro método de pago.';
      return;
    }
    
    // Crear la reserva
    const reservationData = {
      camperId: selectedCamper.value!.id,
      camperName: selectedCamper.value!.name,
      camperImage: selectedCamper.value!.images[0],
      startDate: startDate.value,
      endDate: endDate.value,
      totalDays: totalDays.value,
      totalPrice: totalPrice.value,
      customerName: isAuthenticated.value && user.value?.isAdmin ? user.value.displayName || 'Admin' : customerName.value,
      customerEmail: isAuthenticated.value && user.value?.isAdmin ? user.value.email || 'admin@example.com' : customerEmail.value,
      customerPhone: customerPhone.value,
      paymentMethod: paymentMethod.value
    };
    
    await reservationStore.createReservation(reservationData);
    
    // Mostrar mensaje de éxito
    bookingSuccess.value = true;
    
    // Limpiar formulario
    startDate.value = '';
    endDate.value = '';
    totalDays.value = 0;
    totalPrice.value = 0;
    customerName.value = '';
    customerEmail.value = '';
    customerPhone.value = '';
    paymentMethod.value = '';
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    bookingError.value = 'Ha ocurrido un error al procesar la reserva. Por favor, inténtalo de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="camper-details">
    <div v-if="loading" class="loading">
      <p>Cargando detalles del camper...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="router.push('/')" class="back-button">Volver a inicio</button>
    </div>
    
    <div v-else-if="!selectedCamper" class="not-found">
      <h2>Camper no encontrado</h2>
      <p>Lo sentimos, el camper que buscas no existe o ha sido eliminado.</p>
      <button @click="router.push('/')" class="back-button">Volver a inicio</button>
    </div>
    
    <div v-else class="camper-content">
      <div class="camper-gallery">
        <div class="main-image">
          <img :src="selectedCamper.images[activeImageIndex]" :alt="selectedCamper.name" />
        </div>
        
        <div class="thumbnail-container">
          <div 
            v-for="(image, index) in selectedCamper.images" 
            :key="index"
            class="thumbnail"
            :class="{ active: index === activeImageIndex }"
            @click="setActiveImage(index)"
          >
            <img :src="image" :alt="`${selectedCamper.name} - imagen ${index + 1}`" />
          </div>
        </div>
      </div>
      
      <div class="camper-info">
        <div class="camper-header">
          <h1>{{ selectedCamper.name }}</h1>
          <p class="location">{{ selectedCamper.location }}</p>
          <p class="price">{{ selectedCamper.price }}€ / día</p>
        </div>
        
        <div class="camper-description">
          <h2>Descripción</h2>
          <p>{{ selectedCamper.description }}</p>
        </div>
        
        <div class="camper-features">
          <h2>Características</h2>
          <ul>
            <li><strong>Capacidad:</strong> {{ selectedCamper.capacity }} personas</li>
            <li v-for="(feature, index) in selectedCamper.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="booking-section">
        <h2>Reserva este camper</h2>
        
        <div v-if="!selectedCamper.available" class="not-available-message">
          <p>Este camper no está disponible actualmente para reserva.</p>
        </div>
        
        <div v-else-if="bookingSuccess" class="booking-success">
          <div class="success-icon">✓</div>
          <h3>¡Pago procesado correctamente!</h3>
          <p>Tu reserva ha sido realizada con éxito. Hemos enviado un correo electrónico con los detalles de tu reserva a <strong>{{ customerEmail || user?.email }}</strong>.</p>
          <p>Puedes consultar o cancelar tu reserva en cualquier momento desde la sección "Mis Reservas".</p>
          <div class="payment-confirmation">
            <p><strong>Método de pago:</strong> {{ paymentMethod === 'card' ? 'Tarjeta de crédito' : paymentMethod === 'apple-pay' ? 'Apple Pay' : 'Google Pay' }}</p>
            <p><strong>Importe:</strong> {{ totalPrice }}€</p>
            <p><strong>Fecha de pago:</strong> {{ new Date().toLocaleDateString('es-ES') }}</p>
          </div>
          <div class="booking-actions">
            <button @click="bookingSuccess = false" class="secondary-button">Realizar otra reserva</button>
            <button @click="router.push('/reservations')" class="booking-button">Ver mis reservas</button>
          </div>
        </div>
        
        <form v-else @submit.prevent="handleBooking" class="booking-form">
          <!-- Fechas de reserva -->
          <div class="form-group">
            <label for="start-date">Fecha de inicio</label>
            <div class="date-input-wrapper">
              <input 
                type="date" 
                id="start-date" 
                v-model="startDate"
                @change="calculateTotalDays"
                :min="new Date().toISOString().split('T')[0]"
                required
                :class="{ 'date-occupied': startDate && isDateOccupied(startDate) }"
                @input="(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value && isDateOccupied(target.value)) {
                    bookingError.value = 'Esta fecha no está disponible';
                    startDate.value = '';
                  } else {
                    if (bookingError.value === 'Esta fecha no está disponible') {
                      bookingError.value = '';
                    }
                  }
                }"
              />
              <div v-if="occupiedDates.length > 0" class="date-info">
                <span class="date-info-icon">ℹ️</span>
                <span class="date-info-text">Hay {{ occupiedDates.length }} días no disponibles</span>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="end-date">Fecha de fin</label>
            <div class="date-input-wrapper">
              <input 
                type="date" 
                id="end-date" 
                v-model="endDate"
                @change="calculateTotalDays"
                :min="startDate || new Date().toISOString().split('T')[0]"
                required
                :class="{ 'date-occupied': endDate && isDateOccupied(endDate) }"
                @input="(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value && isDateOccupied(target.value)) {
                    bookingError.value = 'Esta fecha no está disponible';
                    endDate.value = '';
                  } else {
                    if (bookingError.value === 'Esta fecha no está disponible') {
                      bookingError.value = '';
                    }
                  }
                }"
              />
            </div>
          </div>
          
          <div class="date-legend">
            <div class="date-legend-item">
              <span class="date-legend-color available"></span>
              <span>Disponible</span>
            </div>
            <div class="date-legend-item">
              <span class="date-legend-color occupied"></span>
              <span>No disponible</span>
            </div>
          </div>
          
          <!-- Información del cliente (solo para usuarios no autenticados o no administradores) -->
          <template v-if="!isAuthenticated || !user?.isAdmin">
            <div class="form-group">
              <label for="customer-name">Nombre completo</label>
              <input 
                type="text" 
                id="customer-name" 
                v-model="customerName"
                placeholder="Tu nombre completo"
                required
              />
              <span v-if="formErrors.name" class="field-error">{{ formErrors.name }}</span>
            </div>
            
            <div class="form-group">
              <label for="customer-email">Correo electrónico</label>
              <input 
                type="email" 
                id="customer-email" 
                v-model="customerEmail"
                placeholder="tu@email.com"
                required
              />
              <span v-if="formErrors.email" class="field-error">{{ formErrors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="customer-phone">Teléfono</label>
              <input 
                type="tel" 
                id="customer-phone" 
                v-model="customerPhone"
                placeholder="123456789"
                required
              />
              <span v-if="formErrors.phone" class="field-error">{{ formErrors.phone }}</span>
            </div>
          </template>
          
          <!-- Resumen de la reserva -->
          <div v-if="totalDays > 0" class="booking-summary" :class="{ 'span-all': !isAuthenticated || !user?.isAdmin }">
            <p><strong>Total días:</strong> {{ totalDays }}</p>
            <p><strong>Precio total:</strong> {{ totalPrice }}€</p>
            <p v-if="!isAvailable" class="availability-warning">
              Este camper no está disponible para las fechas seleccionadas.
            </p>
          </div>
          
          <div v-if="bookingError" class="booking-error" :class="{ 'span-all': !isAuthenticated || !user?.isAdmin }">
            <p>{{ bookingError }}</p>
          </div>
          
          <!-- Opciones de pago -->
          <div class="form-group payment-section" :class="{ 'span-all': !isAuthenticated || !user?.isAdmin }">
            <label>Método de pago</label>
            <div class="payment-methods">
              <div 
                class="payment-method" 
                :class="{ selected: paymentMethod === 'card' }" 
                @click="paymentMethod = 'card'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                <span>Tarjeta de crédito</span>
              </div>
              
              <div 
                class="payment-method" 
                :class="{ selected: paymentMethod === 'apple-pay' }" 
                @click="paymentMethod = 'apple-pay'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3 0-2.5 2.5-3.5 2.5-3.5C19 7.5 16.5 5 14 5c-1.5 0-2 .5-3 .5s-1.679-.5-2-.5z"></path>
                  <path d="M12 4a2 2 0 0 0 2-2c0 1.1-.9 2-2 2z"></path>
                </svg>
                <span>Apple Pay</span>
              </div>
              
              <div 
                class="payment-method" 
                :class="{ selected: paymentMethod === 'google-pay' }" 
                @click="paymentMethod = 'google-pay'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6-6 6 6"></path>
                  <path d="M6 15l6 6 6-6"></path>
                </svg>
                <span>Google Pay</span>
              </div>
            </div>
            <span v-if="formErrors.payment" class="field-error">{{ formErrors.payment }}</span>
          </div>
          
          <button 
            type="submit" 
            class="booking-button" 
            :class="{ 'span-all': !isAuthenticated || !user?.isAdmin }"
            :disabled="!selectedCamper.available || !isAvailable || isSubmitting || !paymentMethod"
          >
            <span v-if="isSubmitting">Procesando...</span>
            <span v-else>Pagar y reservar ahora</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.camper-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
}

.loading, .error, .not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.back-button {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.camper-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 992px) {
  .camper-content {
    grid-template-columns: 3fr 2fr;
  }
  
  .booking-section {
    grid-column: span 2;
  }
}

.camper-gallery {
  margin-bottom: 2rem;
}

.main-image {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-container {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.thumbnail {
  width: 80px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.thumbnail.active {
  opacity: 1;
  border: 2px solid #4CAF50;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.camper-header {
  margin-bottom: 2rem;
}

.camper-header h1 {
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.camper-description, .camper-features {
  margin-bottom: 2rem;
}

.camper-features ul {
  list-style-type: none;
  padding: 0;
}

.camper-features li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.booking-section {
  background-color: var(--neutral-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  border: 2px solid var(--accent-color);
}

.booking-form {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .booking-form {
    grid-template-columns: 1fr 1fr;
  }
  
  .booking-summary, .booking-error, .booking-button, .not-available-message, .booking-success, .booking-actions {
    grid-column: span 2;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.booking-summary {
  background-color: var(--light-color);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--box-shadow);
  border: 1px solid var(--primary-color);
  color: var(--dark-color);
  font-weight: 600;
}

.booking-error {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
}

.field-error {
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.booking-success {
  background-color: var(--accent-color);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--box-shadow);
  border: 2px solid var(--primary-color);
}

.success-icon {
  background-color: var(--primary-color);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 1.5rem;
  box-shadow: var(--box-shadow);
  border: 2px solid white;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(128, 155, 206, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(128, 155, 206, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(128, 155, 206, 0);
  }
}

.payment-confirmation {
  background-color: white;
  padding: 1.25rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  border: 2px solid var(--secondary-color);
  text-align: left;
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
}

.payment-confirmation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
}

.booking-success h3 {
  color: var(--primary-color);
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
}

.booking-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.secondary-button {
  padding: 12px 20px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.secondary-button:hover {
  background-color: #e0e0e0;
}

.span-all {
  grid-column: span 2;
}

.availability-warning {
  color: #f57c00;
  font-weight: bold;
  margin-top: 0.5rem;
}

.booking-button {
  padding: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.booking-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.booking-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.payment-section {
  margin-top: 1rem;
}

.payment-methods {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.payment-method {
  flex: 1;
  min-width: 150px;
  padding: 1rem;
  border: 2px solid var(--neutral-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
}

.payment-method:hover,
.payment-method.selected {
  border-color: var(--primary-color);
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

.not-available-message {
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  color: #d32f2f;
}

.date-input-wrapper {
  position: relative;
}

.date-info {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date-info-icon {
  font-size: 1rem;
}

.date-legend {
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0 1rem;
  font-size: 0.85rem;
}

.date-legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date-legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: inline-block;
}

.date-legend-color.available {
  background-color: var(--light-color);
  border: 1px solid var(--primary-color);
}

.date-legend-color.occupied {
  background-color: var(--accent-color);
  border: 1px solid #d32f2f;
}

.date-occupied {
  background-color: var(--accent-color);
  border-color: #d32f2f;
  color: #d32f2f;
  position: relative;
}

.date-occupied::after {
  content: '❌';
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
}
</style>