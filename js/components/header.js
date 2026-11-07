export function header() {
  return `
    <!-- Este encabezado reúne los accesos más importantes para el cliente. -->
    <div class="topbar"><div class="container topbar-inner">
      <span><i data-lucide="map-pin"></i> San Pedro Sula, Honduras</span>
      <a href="tel:+50499043670"><i data-lucide="phone"></i> +504 9904-3670</a>
      <span class="topbar-right">Soluciones de empaque industrial</span>
    </div></div>
    <header class="site-header" id="inicio"><div class="container header-inner">
      <a class="brand" href="#inicio" aria-label="EMPAQ, ir al inicio"><img src="./assets/logos/empaq-simbolo-original.png" alt="Símbolo original EMPAQ" width="56" height="56"><span>EMPAQ</span></a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a class="active" href="#inicio">Inicio</a><a href="#categorias">Productos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a>
      </nav>
      <a class="btn btn-primary header-cta whatsapp-link" href="#" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Solicita tu cotización</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú"><i data-lucide="menu"></i></button>
    </div>
    <nav class="mobile-nav" id="mobile-menu" aria-label="Menú para dispositivos móviles" hidden>
      <a href="#inicio">Inicio</a><a href="#categorias">Productos</a><a href="#destacados">Destacados</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a>
    </nav></header>`;
}
