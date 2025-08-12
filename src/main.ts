import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Inicializar Firebase
import './firebase/config'

// Crear la aplicación Vue
const app = createApp(App)

// Usar Pinia para la gestión de estado
app.use(createPinia())

// Usar Vue Router para la navegación
app.use(router)

// Montar la aplicación en el DOM
app.mount('#app')
