<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import { storeToRefs } from 'pinia';

const router = useRouter();
const authStore = useAuthStore();
const { isAuthenticated, currentUser } = storeToRefs(authStore);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleLogout = async () => {
  try {
    await authStore.logout();
    router.push('/');
    closeMenu();
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

const userName = computed(() => {
  return currentUser.value?.displayName || 'Usuario';
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <router-link to="/" @click="closeMenu">
          <span class="logo-text">🚐</span>
        </router-link>
      </div>
      
      <div class="navbar-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-start">
          <span class="navbar-item brand-text">TuCamper<span class="brand-highlight">.com</span></span>
          <router-link to="/" class="navbar-item navbar-item-bold" @click="closeMenu">Inicio</router-link>
          <router-link to="/reservations" class="navbar-item navbar-item-bold" @click="closeMenu">Mis Reservas</router-link>
        </div>
        
        <div class="navbar-end">
          <template v-if="isAuthenticated">
            <div class="navbar-item has-dropdown">
              <a class="navbar-link">{{ userName }}</a>
              
              <div class="navbar-dropdown">
                <router-link to="/admin" class="navbar-item">Panel de Control</router-link>
                <a class="navbar-item" @click="handleLogout">Cerrar sesión</a>
              </div>
            </div>
          </template>
          
          <template v-else>
            <router-link to="/login" class="navbar-item" @click="closeMenu">Área de Administración</router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 3px solid var(--secondary-color);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo a {
  text-decoration: none;
  color: var(--dark-color);
  font-size: 1.8rem;
}

.brand-text {
  font-weight: 800;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.5rem 0;
  text-transform: uppercase;
}

.brand-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, var(--primary-color), var(--accent-color));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.brand-text:hover::after {
  transform: scaleX(1);
}

.brand-highlight {
  color: var(--accent-color);
  font-weight: 900;
  -webkit-text-fill-color: var(--accent-color);
  position: relative;
  display: inline-block;
  transform: translateY(-2px) scale(1.1);
}

.logo-text {
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.navbar-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  margin-bottom: 5px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.navbar-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 2rem;
}

.navbar-start, .navbar-end {
  display: flex;
  align-items: center;
}

.navbar-item {
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.navbar-item:hover {
  color: #4CAF50;
  transform: translateY(-2px);
}

.navbar-item-bold {
  font-weight: bold;
}

/* Estilos para botones de acción */
.action-button {
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
}

.action-button:hover {
  background-color: #388e3c;
  color: white;
}

.has-dropdown {
  position: relative;
}

.navbar-link {
  padding: 0.5rem 1rem;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.navbar-link:after {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  margin-left: 0.5rem;
}

.navbar-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.has-dropdown:hover .navbar-dropdown {
  display: block;
}

.navbar-dropdown .navbar-item {
  padding: 0.75rem 1rem;
  display: block;
  white-space: nowrap;
}

.navbar-dropdown .navbar-item:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }
  
  .navbar-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-left: 0;
  }
  
  .navbar-menu.is-active {
    display: flex;
  }
  
  .navbar-start, .navbar-end {
    flex-direction: column;
    width: 100%;
  }
  
  .navbar-item {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
  
  .action-button {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
  
  .has-dropdown {
    width: 100%;
  }
  
  .navbar-link {
    justify-content: center;
  }
  
  .navbar-dropdown {
    position: static;
    box-shadow: none;
    display: none;
  }
  
  .has-dropdown:hover .navbar-dropdown {
    display: none;
  }
  
  .has-dropdown.is-active .navbar-dropdown {
    display: block;
  }
}
</style>