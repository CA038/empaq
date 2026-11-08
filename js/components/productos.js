export const products = [
  {
    key: 'etiquetas',
    name: 'Etiquetas y Troqueles',
    desc: 'Personalizadas en rollo, catálogo completo de troqueles y medidas en stock.',
    img: 'etiquetas.jpg',
    stockImg: 'etiquetas-stock.jpg',
    stockTag: 'Envasado y rotulado'
  },
  {
    key: 'stretch',
    name: 'Película Strech Film',
    desc: 'Film estirable manual de 3 capas y preestirado ecológico para paletizar cargas.',
    img: 'stretch.jpg',
    stockImg: 'stretch-stock.jpg',
    stockTag: 'Paletizado en almacén'
  },
  {
    key: 'cintas',
    name: 'Cintas de Empaque',
    desc: 'Transparentes, avana café, masking tape general y automotriz, y ducto gris.',
    img: 'cintas.jpg',
    stockImg: 'cintas-stock.jpg',
    stockTag: 'Sellado de cajas'
  },
  {
    key: 'papel-pos',
    name: 'Papel POS y Térmico',
    desc: 'Rollos químicos autocopiantes (2 y 3 copias), bond y papel impreso para cajas.',
    img: 'papel-pos.jpg',
    stockImg: 'papel-pos-stock.jpg',
    stockTag: 'Puntos de venta'
  },
  {
    key: 'impresoras',
    name: 'Impresoras de Etiquetas',
    desc: 'Equipos térmicos directos y de transferencia TSC y Zebra, industriales y portátiles.',
    img: 'impresoras.jpg',
    stockImg: 'impresoras-stock.jpg',
    stockTag: 'Impresión térmica'
  },
  {
    key: 'ribbons',
    name: 'Ribbons Térmicos',
    desc: 'Consumibles en cera, resina y cera/resina en bobina con mandril estándar.',
    img: 'ribbons.jpg',
    stockImg: 'ribbons-stock.jpg',
    stockTag: 'Transferencia térmica'
  }
];

export function productos() {
  return `<!-- Sección principal de productos con acceso a catálogo detallado, troqueles y medidas por ventana emergente. -->
  <section class="section featured" id="productos"><div class="container">
    <div class="section-heading reveal"><span class="orange-line"></span><h2>Nuestros Productos</h2></div>
    <div class="product-grid">${products.map((p, i) => `
      <article class="product-card reveal" style="--delay:${i * 60}ms">
        <div class="product-card-media" data-category-key="${p.key}" role="button" tabindex="0" title="Haz clic para ver opciones y medidas">
          <img class="img-product" src="./assets/productos/${p.img}" alt="${p.name}" loading="lazy" width="320" height="240">
          <img class="img-stock" src="./assets/stock/${p.stockImg}" alt="${p.name} en uso" loading="lazy" width="320" height="240">
          <span class="stock-pill"><i data-lucide="eye"></i> En uso: ${p.stockTag}</span>
          <span class="product-badge"><i data-lucide="layers"></i> Ver catálogo completo</span>
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-actions">
            <button type="button" class="btn-sheet" data-category-key="${p.key}"><i data-lucide="list"></i> Ver opciones y medidas</button>
            <a class="product-quote" href="#" data-product="${p.name}" target="_blank" rel="noopener noreferrer"><i data-lucide="message-circle"></i> Cotizar</a>
          </div>
        </div>
      </article>`).join('')}</div>
  </div></section>`;
}
