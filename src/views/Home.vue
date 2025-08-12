<script setup lang="ts">
import { onMounted } from 'vue';
import { useCamperStore } from '../stores/camperStore';
import { storeToRefs } from 'pinia';

const camperStore = useCamperStore();
const { campers, loading, error } = storeToRefs(camperStore);

onMounted(() => {
  camperStore.fetchCampers();
});

// La función de búsqueda se implementará en futuras versiones
// cuando se agregue un formulario de búsqueda al template
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Descubre la libertad en cuatro ruedas</h1>
        <p>Alquila el camper perfecto para tu próxima aventura</p>
        
        <div class="action-container">
          <router-link to="/camper/1" class="action-button">
            <span class="action-icon">🚐</span>
            Ver nuestra camper
          </router-link>
        </div>
      </div>
    </section>
    
    <section class="campers-section">
      <h2>Nuestros Campers</h2>
      
      <div v-if="loading" class="loading">
        <p>Cargando campers...</p>
      </div>
      
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      
      <div v-else-if="campers.length === 0" class="no-results">
        <p>No se encontraron campers disponibles</p>
      </div>
      
      <div v-else class="campers-grid">
        <div v-for="camper in campers" :key="camper.id" class="camper-card">
          <router-link :to="`/camper/${camper.id}`">
            <div class="camper-image">
              <img :src="camper.images[0]" :alt="camper.name" />
              <span v-if="!camper.available" class="not-available">No disponible</span>
            </div>
            
            <div class="camper-info">
              <h3>{{ camper.name }}</h3>
              <p class="location">{{ camper.location }}</p>
              <p class="price">{{ camper.price }}€ / día</p>
              
              <div class="camper-features">
                <span><i class="icon-person"></i> {{ camper.capacity }} personas</span>
                <span v-for="(feature, index) in camper.features.slice(0, 2)" :key="index">
                  {{ feature }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    
    <section class="benefits-section">
      <h2>¿Por qué elegirnos?</h2>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🚐</div>
          <h3>Vehículos de calidad</h3>
          <p>Todos nuestros campers están perfectamente mantenidos y equipados para tu aventura.</p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <h3>Precios transparentes</h3>
          <p>Sin sorpresas ni cargos ocultos. Sabes exactamente lo que pagas.</p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🛡️</div>
          <h3>Seguro incluido</h3>
          <p>Todos nuestros alquileres incluyen seguro a todo riesgo para tu tranquilidad.</p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🔧</div>
          <h3>Asistencia 24/7</h3>
          <p>Soporte técnico y asistencia en carretera disponible todos los días.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1516939884455-1445c8652f83');
  background-size: cover;
  background-position: center;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.action-container {
  display: flex;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.action-button {
  padding: 16px 32px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 250px;
}

.action-icon {
  font-size: 1.5rem;
}

.action-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  color: var(--dark-color);
}

.campers-section, .benefits-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.campers-section h2, .benefits-section h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  color: var(--dark-color);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.campers-section h2::after, .benefits-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.campers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.camper-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  background-color: white;
  position: relative;
}

.camper-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.camper-image {
  height: 200px;
  position: relative;
}

.camper-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.not-available {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--danger-color);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.camper-info {
  padding: 1.5rem;
}

.camper-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.location {
  color: #666;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.camper-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.camper-features span {
  background-color: var(--secondary-color);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.camper-features span:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.benefit-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  background-color: white;
  padding: 2rem;
  text-align: center;
}

.benefit-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background-color: var(--secondary-color);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1) rotate(5deg);
  background-color: var(--accent-color);
}

.benefit-card h3 {
  margin-bottom: 1rem;
}

.loading, .error, .no-results {
  text-align: center;
  padding: 2rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .search-container {
    flex-direction: column;
  }
  
  .search-container input {
    border-radius: 4px 4px 0 0;
  }
  
  .search-button {
    border-radius: 0 0 4px 4px;
  }
}
</style>