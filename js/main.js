import {header} from './components/header.js';
import {hero} from './components/hero.js';
import {beneficios} from './components/beneficios.js';
import {categorias} from './components/categorias.js';
import {productos} from './components/productos.js';
import {contacto} from './components/contacto.js';
import {footer} from './components/footer.js';
import {initMenu} from './menu.js';
import {initWhatsApp} from './whatsapp.js';
import {initAnimations} from './animaciones.js';

// Este archivo reúne las secciones y activa las funciones de la página.
document.querySelector('#app').innerHTML=[
  header(),hero(),beneficios(),categorias(),productos(),contacto(),footer()
].join('');
document.querySelector('#year').textContent=new Date().getFullYear();
initMenu();
initWhatsApp();
initAnimations();

// Los iconos se dibujan desde Lucide, sin añadir imágenes decorativas innecesarias.
const script=document.createElement('script');
script.src='https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js';
script.onload=()=>window.lucide?.createIcons({attrs:{'stroke-width':1.8}});
script.onerror=()=>console.warn('No se pudo cargar Lucide; la navegación y los enlaces siguen funcionando.');
document.head.appendChild(script);
