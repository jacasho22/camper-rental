<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <button @click="goHome" class="home-button">Volver a inicio</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 2rem;
  text-align: center;
}

.not-found-content {
  max-width: 500px;
}

.not-found h1 {
  font-size: 8rem;
  margin: 0;
  color: #4CAF50;
  line-height: 1;
}

.not-found h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.not-found p {
  margin-bottom: 2rem;
  color: #666;
}

.home-button {
  padding: 15px 30px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #388e3c;
}
</style>