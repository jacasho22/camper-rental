<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const router = useRouter();
const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const handleRegister = async () => {
  // Validación básica
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    errorMessage.value = 'Por favor, completa todos los campos';
    return;
  }
  
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Las contraseñas no coinciden';
    return;
  }
  
  if (password.value.length < 6) {
    errorMessage.value = 'La contraseña debe tener al menos 6 caracteres';
    return;
  }
  
  try {
    isLoading.value = true;
    await authStore.register(email.value, password.value, name.value);
    router.push('/');
  } catch (error) {
    console.error('Error de registro:', error);
    // El mensaje de error ya se establece en el store
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Crear Cuenta</h1>
      
      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            placeholder="Tu nombre"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="tu@email.com"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Mínimo 6 caracteres"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="confirm-password">Confirmar contraseña</label>
          <input 
            type="password" 
            id="confirm-password" 
            v-model="confirmPassword" 
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        
        <div v-if="authStore.error || errorMessage" class="error-message">
          <p>{{ authStore.error || errorMessage }}</p>
        </div>
        
        <button 
          type="submit" 
          class="auth-button" 
          :disabled="isLoading || authStore.loading"
        >
          {{ isLoading || authStore.loading ? 'Creando cuenta...' : 'Crear cuenta' }}
        </button>
      </form>
      
      <div class="auth-links">
        <p>¿Ya tienes una cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 2rem;
}

.auth-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
}

.auth-card h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.error-message {
  color: #d32f2f;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
}

.auth-button {
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #388e3c;
}

.auth-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.auth-links {
  margin-top: 1.5rem;
  text-align: center;
}

.auth-links a {
  color: #4CAF50;
  text-decoration: none;
}

.auth-links a:hover {
  text-decoration: underline;
}
</style>