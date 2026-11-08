export function hero() {
  return `
    <!-- Aquí presentamos la propuesta de valor antes de mostrar el catálogo. -->
    <main id="contenido"><section class="hero" aria-labelledby="hero-title">
      <div class="container hero-layout">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span></span> SOLUCIONES DE EMPAQUE INDUSTRIAL</div>
          <h1 id="hero-title">Etiquetas, Empaque y Suministros para <em>tu Negocio</em></h1>
          <p>Calidad, variedad y asesoría especializada en San Pedro Sula.</p>
          <div class="hero-actions">
            <a href="#" class="btn btn-primary whatsapp-link" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Solicita tu cotización</a>
            <a href="#productos" class="btn btn-outline">Conoce nuestros productos <i data-lucide="arrow-right"></i></a>
          </div>
        </div>
        <div class="hero-visual reveal" aria-label="Productos industriales de empaque"><img src="./assets/banners/hero-productos.jpg" alt="Rollos de etiquetas, cintas, impresora y suministros de empaque" fetchpriority="high"></div>
      </div>
    </section></main>`;
}
