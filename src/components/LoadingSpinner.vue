<script setup lang="ts">
// No se requiere lógica para este componente
</script>

<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p v-if="$slots.default" class="loading-text">
      <slot></slot>
    </p>
    <p v-else class="loading-text">Cargando...</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(76, 175, 80, 0.2);
  border-radius: 50%;
  border-top-color: #4CAF50;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #666;
  font-size: 1rem;
}
</style>