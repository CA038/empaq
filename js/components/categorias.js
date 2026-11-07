export const categories=[
  {title:'Etiquetas Adhesivas',image:'etiquetas.jpg',description:'Etiquetas para identificar y organizar tus productos.'},
  {title:'Materiales de Empaque',image:'cintas.jpg',description:'Cintas y materiales para tus procesos de embalaje.'},
  {title:'Ribbons (Tintas)',image:'ribbons.jpg',description:'Consumibles para impresión de etiquetas.'},
  {title:'Impresoras de Etiquetas',image:'impresoras.jpg',description:'Equipos para identificación y etiquetado.'},
  {title:'Películas Stretch y Plástico',image:'stretch.jpg',description:'Materiales para proteger tus mercancías.'},
  {title:'Suministros Industriales',image:'suministros.jpg',description:'Soluciones para las operaciones de tu negocio.'}
];
export function categorias() {
  return `<!-- El catálogo agrupa los productos para que sea fácil explorarlos. -->
  <section id="categorias" class="section categories"><div class="container">
    <div class="section-heading reveal"><span class="orange-line"></span><h2>Explora Nuestras Categorías</h2></div>
    <div class="category-grid">${categories.map((c,i)=>`
      <a class="category-card reveal" href="#contacto" aria-label="Consultar ${c.title}" style="--delay:${i*60}ms">
        <img src="./assets/productos/${c.image}" alt="${c.description}" loading="lazy" width="320" height="260">
        <h3>${c.title}</h3>
      </a>`).join('')}</div>
  </div></section>`;
}
