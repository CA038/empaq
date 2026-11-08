export function footer() {
  return `<!-- El pie de página reúne los enlaces y datos básicos del negocio. -->
  <footer class="footer" id="nosotros"><div class="container footer-grid">
    <div><a class="brand footer-brand" href="#inicio"><img src="./assets/logos/empaq-simbolo-original.png" alt="" width="54" height="54"><span>EMPAQ</span></a>
      <p>Empaques y Representaciones S. de R.L. de C.V. — Fabricante y convertidor de etiquetas adhesivas y soluciones de empaque industrial en Honduras.</p></div>
    <div><h3>Enlaces</h3><a href="#inicio">Inicio</a><a href="#productos">Productos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
    <div><h3>Productos</h3><a href="#productos" data-category-key="etiquetas">Etiquetas y Troqueles</a><a href="#productos" data-category-key="stretch">Película Strech Film</a><a href="#productos" data-category-key="cintas">Cintas de empaque</a><a href="#productos" data-category-key="papel-pos">Papel POS</a><a href="#productos" data-category-key="impresoras">Impresoras</a><a href="#productos" data-category-key="ribbons">Ribbons Térmicos</a></div>
    <div><h3>Contáctanos</h3><a href="tel:+50499043670"><i data-lucide="phone"></i> +504 9904-3670</a>
      <a href="mailto:ventas@empaqhn.com"><i data-lucide="mail"></i> ventas@empaqhn.com</a>
      <span><i data-lucide="map-pin"></i> 33 Calle, Sector El Polvorín (frente a CAMOSA), San Pedro Sula, Honduras</span>
      <a href="#" class="whatsapp-link" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Escríbenos por WhatsApp</a></div>
  </div><div class="container footer-bottom">© <span id="year"></span> EMPAQ. Todos los derechos reservados.</div></footer>
  <a class="whatsapp-float whatsapp-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp"><i data-lucide="message-circle"></i></a>`;
}
