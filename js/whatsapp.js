const NUMBER='50499043670';
const DEFAULT_MESSAGE='Hola, buen día. Estoy visitando la página web de EMPAQ y me gustaría solicitar información y una cotización de sus productos.';
export function initWhatsApp() {
  // Cada botón abre una conversación con un mensaje claro y listo para enviar.
  document.querySelectorAll('.whatsapp-link').forEach(a=>a.href=`https://wa.me/${NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`);
  document.querySelectorAll('[data-product]').forEach(a=>{
    const message=`Hola, buen día. Estoy visitando la página web de EMPAQ y deseo información y una cotización de: ${a.dataset.product}.`;
    a.href=`https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
  });
}
