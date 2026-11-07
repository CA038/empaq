export function footer() {
  return `<!-- El pie de página reúne los enlaces y datos básicos del negocio. -->
  <footer class="footer" id="nosotros"><div class="container footer-grid">
    <div><a class="brand footer-brand" href="#inicio"><img src="./assets/logos/empaq-simbolo-original.png" alt="" width="54" height="54"><span>EMPAQ</span></a>
      <p>Soluciones en etiquetas, empaque y suministros industriales para empresas en Honduras.</p></div>
    <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#categorias">Productos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
    <div><h3>Categorías</h3><a href="#categorias">Etiquetas adhesivas</a><a href="#categorias">Materiales de empaque</a><a href="#categorias">Ribbons</a><a href="#categorias">Impresoras de etiquetas</a></div>
    <div><h3>Contáctanos</h3><a href="tel:+50499043670"><i data-lucide="phone"></i> +504 9904-3670</a>
      <span><i data-lucide="map-pin"></i> San Pedro Sula, Honduras</span>
      <a href="#" class="whatsapp-link" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Escríbenos por WhatsApp</a></div>
  </div><div class="container footer-bottom">© <span id="year"></span> EMPAQ. Todos los derechos reservados.</div></footer>
  <a class="whatsapp-float whatsapp-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp"><i data-lucide="message-circle"></i></a>`;
}
