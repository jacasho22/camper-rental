<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { useCamperStore } from '../stores/camperStore';

const router = useRouter();
const authStore = useAuthStore();
const camperStore = useCamperStore();

// Verificar si el usuario es administrador
onMounted(async () => {
  if (!authStore.isAuthenticated || !authStore.currentUser?.isAdmin) {
    router.push('/login');
    return;
  }
  
  // Cargar los campers
  await camperStore.fetchCampers();
});

// Estado para la edición de campers
const isEditing = ref(false);
const currentCamper = ref<any>(null); // Usamos any temporalmente para evitar errores de tipo

// Métodos para gestionar campers
const editCamper = (camper: any) => {
  if (!camper || !camper.id) {
    console.error('Camper inválido');
    return;
  }
  currentCamper.value = { ...camper };
  isEditing.value = true;
};

const saveCamper = async () => {
  if (!currentCamper.value) return;
  
  try {
    // Validar campos obligatorios
    if (!currentCamper.value.name || !currentCamper.value.location || !currentCamper.value.price) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }
    
    // Asegurarse de que el precio es un número
    currentCamper.value.price = Number(currentCamper.value.price);
    
    // Guardar los cambios usando el store
    const success = await camperStore.updateCamper(currentCamper.value);
    
    if (success) {
      alert('Camper actualizado correctamente');
      isEditing.value = false;
      currentCamper.value = null;
    } else {
      alert('Error al actualizar el camper');
    }
  } catch (error) {
    console.error('Error al guardar el camper:', error);
    alert('Error al guardar los cambios');
  }
};

const cancelEdit = () => {
  isEditing.value = false;
  currentCamper.value = null;
};
</script>

<template>
  <div class="admin-container">
    <div v-if="!authStore.isAuthenticated || !authStore.currentUser?.isAdmin" class="unauthorized">
      <h2>Acceso no autorizado</h2>
      <p>Debes iniciar sesión como administrador para acceder a esta página.</p>
      <router-link to="/login" class="auth-button">Ir a iniciar sesión</router-link>
    </div>
    
    <div v-else class="admin-content">
      <h1>Panel de Administración</h1>
      
      <div class="admin-header">
        <h2>Gestión de Campers</h2>
        <p>Bienvenido, {{ authStore.currentUser?.displayName || 'Administrador' }}. Aquí puedes gestionar las campers disponibles.</p>
      </div>
      
      <div class="admin-section">
        <h3>Listado de Campers</h3>
        
        <div v-if="camperStore.loading" class="loading">
          <p>Cargando campers...</p>
        </div>
        
        <div v-else-if="camperStore.error" class="error-message">
          <p>{{ camperStore.error }}</p>
        </div>
        
        <div v-else>
          <div class="campers-list">
            <div v-for="camper in camperStore.campers" :key="camper.id" class="camper-item">
              <div class="camper-info">
                <h4>{{ camper.name }}</h4>
                <p><strong>Ubicación:</strong> {{ camper.location }}</p>
                <p><strong>Precio:</strong> {{ camper.price }}€/día</p>
              </div>
              
              <div class="camper-actions">
                <button @click="editCamper(camper)" class="edit-button">Editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modal de edición (simplificado) -->
      <div v-if="isEditing && currentCamper" class="edit-modal">
        <div class="modal-content">
          <h3>Editar Camper</h3>
          
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" v-model="currentCamper.name" />
          </div>
          
          <div class="form-group">
            <label>Ubicación</label>
            <input type="text" v-model="currentCamper.location" />
          </div>
          
          <div class="form-group">
            <label>Precio por día</label>
            <input type="number" v-model="currentCamper.price" />
          </div>
          
          <div class="form-group">
            <label>Descripción</label>
            <textarea v-model="currentCamper.description"></textarea>
          </div>
          
          <div class="modal-actions">
            <button @click="saveCamper" class="save-button">Guardar cambios</button>
            <button @click="cancelEdit" class="cancel-button">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.unauthorized {
  text-align: center;
  padding: 3rem;
}

.admin-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.admin-section {
  margin-bottom: 3rem;
}

.campers-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.camper-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.camper-info h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.camper-actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.edit-button {
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #1976D2;
}

.edit-modal {
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
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  min-height: 100px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

.save-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #388E3C;
}

.cancel-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #d32f2f;
}

.loading,
.error-message {
  padding: 2rem;
  text-align: center;
}

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .campers-list {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    width: 90%;
    padding: 1.5rem;
  }
}
</style>