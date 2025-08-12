<script setup lang="ts">
// No se requiere lógica para este componente
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>TuCamper.com</h3>
        <p>Tu destino para alquilar campers y autocaravanas de calidad. Explora la libertad de viajar a tu ritmo.</p>
      </div>
      
      <div class="footer-section">
        <h3>Enlaces rápidos</h3>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/login">Área de Administración</router-link></li>
          <li><router-link to="/reservations">Mis Reservas</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><router-link to="/privacy-policy">Política de Privacidad</router-link></li>
          <li><router-link to="/cookie-policy">Política de Cookies</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Contacto</h3>
        <ul>
          <li>Email: info@tucamper.com</li>
          <li>Teléfono: +34 123 456 789</li>
          <li>Dirección: Calle Principal 123, Madrid</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Síguenos</h3>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} TuCamper.com. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 3rem 2rem 1rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 576px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .footer-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

.footer-section h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--accent-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: white;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}
</style>