<script setup lang="ts">
import { defineProps } from 'vue';

interface ErrorMessageProps {
  message: string;
}

defineProps<ErrorMessageProps>();
</script>

<template>
  <div class="error-container">
    <div class="error-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </div>
    <p class="error-message">{{ message }}</p>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  background-color: #ffebee;
  border-left: 4px solid #d32f2f;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

.error-icon {
  color: #d32f2f;
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.error-message {
  color: #d32f2f;
  margin: 0;
  font-size: 0.9rem;
}
</style>