<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

interface CamperCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  capacity: number;
  available: boolean;
}

const props = defineProps<CamperCardProps>();
const router = useRouter();

const viewDetails = () => {
  router.push(`/camper/${props.id}`);
};
</script>

<template>
  <div class="camper-card" :class="{ 'not-available': !available }">
    <div class="camper-image">
      <img :src="image" :alt="name" />
      <span v-if="!available" class="availability-badge">No disponible</span>
    </div>
    
    <div class="camper-info">
      <h3>{{ name }}</h3>
      <p class="location">{{ location }}</p>
      
      <div class="camper-details">
        <span class="capacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          {{ capacity }} personas
        </span>
        
        <span class="price">{{ price }}€ / día</span>
      </div>
      
      <button @click="viewDetails" class="view-button">
        Ver detalles
      </button>
    </div>
  </div>
</template>

<style scoped>
.camper-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.camper-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.camper-card.not-available {
  opacity: 0.8;
}

.camper-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.camper-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.camper-card:hover .camper-image img {
  transform: scale(1.05);
}

.availability-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #d32f2f;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.camper-info {
  padding: 1.5rem;
}

.camper-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.location {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.camper-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.capacity {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  color: #666;
}

.price {
  font-weight: bold;
  color: #4CAF50;
}

.view-button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #388e3c;
}

.not-available .view-button {
  background-color: #9e9e9e;
}

.not-available .view-button:hover {
  background-color: #757575;
}
</style>