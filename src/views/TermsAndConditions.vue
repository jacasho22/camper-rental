<script setup lang="ts">
// No se requiere lógica para este componente
</script>

<template>
  <div class="legal-page">
    <div class="legal-container">
      <h1>Términos y Condiciones</h1>
      
      <div class="last-updated">Última actualización: {{ new Date().toLocaleDateString() }}</div>
      
      <section>
        <h2>1. Introducción</h2>
        <p>Estos términos y condiciones ("Términos") rigen su uso del sitio web TuCamper.com ("el Sitio"), operado por TuCamper.com ("nosotros", "nuestro", o "la Empresa"). Al acceder o utilizar el Sitio, usted acepta estar legalmente obligado por estos Términos. Si no está de acuerdo con estos Términos, no debe utilizar el Sitio.</p>
      </section>
      
      <section>
        <h2>2. Definiciones</h2>
        <p>En estos Términos:</p>
        <ul>
          <li>"Cliente" significa cualquier persona que reserve o alquile una camper a través del Sitio.</li>
          <li>"Contenido" significa cualquier información, texto, gráficos, fotos u otros materiales cargados, descargados o que aparecen en el Sitio.</li>
          <li>"Servicios" significa todos los servicios proporcionados por TuCamper.com, incluido el alquiler de campers.</li>
          <li>"Usuario" significa cualquier persona que acceda o utilice el Sitio.</li>
        </ul>
      </section>
      
      <section>
        <h2>3. Uso del Sitio</h2>
        <p>Al utilizar nuestro Sitio, usted garantiza que:</p>
        <ul>
          <li>Tiene al menos 18 años de edad.</li>
          <li>Tiene la capacidad legal para celebrar contratos vinculantes.</li>
          <li>Proporcionará información precisa, actualizada y completa cuando se le solicite.</li>
          <li>Utilizará el Sitio de acuerdo con todas las leyes y regulaciones aplicables.</li>
          <li>No utilizará el Sitio para ningún propósito ilegal o no autorizado.</li>
          <li>No intentará dañar, deshabilitar o sobrecargar el Sitio.</li>
        </ul>
      </section>
      
      <section>
        <h2>4. Reservas y Alquileres</h2>
        <p>4.1 <strong>Proceso de Reserva:</strong> Para reservar una camper, debe completar el proceso de reserva en el Sitio, proporcionar toda la información solicitada y realizar el pago requerido.</p>
        <p>4.2 <strong>Confirmación:</strong> Una reserva solo se confirma cuando recibe una confirmación por escrito de nosotros, generalmente por correo electrónico.</p>
        <p>4.3 <strong>Requisitos para el Alquiler:</strong> Para alquilar una camper, debe:</p>
        <ul>
          <li>Tener al menos 25 años de edad.</li>
          <li>Poseer un permiso de conducir válido con al menos 2 años de antigüedad.</li>
          <li>Presentar una tarjeta de crédito válida a su nombre para el depósito de seguridad.</li>
          <li>Cumplir con cualquier otro requisito especificado en el momento de la reserva.</li>
        </ul>
        <p>4.4 <strong>Depósito de Seguridad:</strong> Se requiere un depósito de seguridad para todas las reservas, que se reembolsará dentro de los 7 días posteriores a la devolución de la camper, sujeto a cualquier deducción por daños o incumplimiento de estos Términos.</p>
      </section>
      
      <section>
        <h2>5. Pagos y Tarifas</h2>
        <p>5.1 <strong>Tarifas:</strong> Todas las tarifas se muestran en euros e incluyen el IVA aplicable.</p>
        <p>5.2 <strong>Pago:</strong> El pago completo se requiere al momento de la reserva, a menos que se acuerde lo contrario por escrito.</p>
        <p>5.3 <strong>Métodos de Pago:</strong> Aceptamos pagos mediante tarjeta de crédito, Apple Pay y Google Pay.</p>
        <p>5.4 <strong>Cargos Adicionales:</strong> Pueden aplicarse cargos adicionales por:</p>
        <ul>
          <li>Devolución tardía de la camper.</li>
          <li>Daños a la camper más allá del desgaste normal.</li>
          <li>Limpieza excesiva requerida después de la devolución.</li>
          <li>Multas de tráfico o estacionamiento incurridas durante el período de alquiler.</li>
          <li>Kilometraje excesivo más allá del límite diario especificado.</li>
        </ul>
      </section>
      
      <section>
        <h2>6. Cancelaciones y Modificaciones</h2>
        <p>6.1 <strong>Política de Cancelación:</strong></p>
        <ul>
          <li>Cancelaciones realizadas con más de 30 días de anticipación a la fecha de inicio del alquiler: reembolso completo menos una tarifa administrativa de 50€.</li>
          <li>Cancelaciones realizadas entre 15-30 días antes de la fecha de inicio: reembolso del 50% del monto total.</li>
          <li>Cancelaciones realizadas con menos de 15 días de anticipación: sin reembolso.</li>
        </ul>
        <p>6.2 <strong>Modificaciones:</strong> Las solicitudes para modificar una reserva están sujetas a disponibilidad y pueden incurrir en cargos adicionales.</p>
      </section>
      
      <section>
        <h2>7. Responsabilidades del Cliente</h2>
        <p>Durante el período de alquiler, el Cliente es responsable de:</p>
        <ul>
          <li>Utilizar la camper de manera responsable y solo para su propósito previsto.</li>
          <li>Asegurar que solo los conductores autorizados (nombrados en el contrato de alquiler) conduzcan la camper.</li>
          <li>Cumplir con todas las leyes de tráfico y regulaciones.</li>
          <li>No fumar dentro de la camper.</li>
          <li>No permitir mascotas en la camper sin autorización previa.</li>
          <li>Devolver la camper en la misma condición en que fue recibida, exceptuando el desgaste normal.</li>
          <li>Notificarnos inmediatamente de cualquier accidente, daño o avería.</li>
        </ul>
      </section>
      
      <section>
        <h2>8. Limitación de Responsabilidad</h2>
        <p>8.1 <strong>Exclusión de Garantías:</strong> El Sitio y los Servicios se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas.</p>
        <p>8.2 <strong>Limitación de Responsabilidad:</strong> En la medida permitida por la ley, no seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos.</p>
        <p>8.3 <strong>Fuerza Mayor:</strong> No seremos responsables por cualquier falla o retraso en el cumplimiento resultante de circunstancias más allá de nuestro control razonable.</p>
      </section>
      
      <section>
        <h2>9. Propiedad Intelectual</h2>
        <p>9.1 <strong>Nuestro Contenido:</strong> Todo el Contenido en el Sitio, incluidos textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de TuCamper.com o sus licenciantes y está protegido por leyes de propiedad intelectual.</p>
        <p>9.2 <strong>Uso Limitado:</strong> Se le otorga un derecho limitado, no exclusivo, no transferible y revocable para acceder y utilizar el Sitio y su Contenido para sus propósitos personales y no comerciales.</p>
      </section>
      
      <section>
        <h2>10. Privacidad</h2>
        <p>Su uso del Sitio está sujeto a nuestra <router-link to="/privacy-policy">Política de Privacidad</router-link>, que se incorpora por referencia a estos Términos.</p>
      </section>
      
      <section>
        <h2>11. Cookies</h2>
        <p>El Sitio utiliza cookies de acuerdo con nuestra <router-link to="/cookie-policy">Política de Cookies</router-link>.</p>
      </section>
      
      <section>
        <h2>12. Cambios a estos Términos</h2>
        <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el Sitio. Su uso continuado del Sitio después de cualquier cambio constituye su aceptación de los Términos modificados.</p>
      </section>
      
      <section>
        <h2>13. Ley Aplicable y Jurisdicción</h2>
        <p>Estos Términos se regirán e interpretarán de acuerdo con las leyes de España. Cualquier disputa que surja de o en relación con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Madrid, España.</p>
      </section>
      
      <section>
        <h2>14. Contacto</h2>
        <p>Si tiene alguna pregunta sobre estos Términos, contáctenos en:</p>
        <p>Email: legal@tucamper.com</p>
        <p>Dirección postal: Calle Principal 123, 28001 Madrid, España</p>
        <p>Teléfono: +34 123 456 789</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding: 2rem 1rem;
  background-color: var(--neutral-color);
}

.legal-container {
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h1 {
  color: var(--dark-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  text-align: center;
}

.last-updated {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid var(--secondary-color);
  padding-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

strong {
  color: var(--dark-color);
}
</style>