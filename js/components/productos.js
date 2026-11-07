const products=[
 ['Etiquetas Adhesivas','Varias medidas','etiquetas-destacado.jpg'],
 ['Película Stretch','Uso industrial','stretch-destacado.jpg'],
 ['Ribbons Térmicos','Para impresión','ribbons-destacado.jpg'],
 ['Impresoras de Etiquetas','Para tu negocio','impresoras-destacado.jpg'],
 ['Cintas de Empaque','Resistentes y seguras','cintas-destacado.jpg']
];
export function productos() {
  return `<!-- Estos productos destacados ayudan a descubrir las soluciones más consultadas. -->
  <section class="section featured" id="destacados"><div class="container">
    <div class="section-heading reveal"><span class="orange-line"></span><h2>Productos Destacados</h2></div>
    <div class="product-grid">${products.map(([name,desc,img],i)=>`
      <article class="product-card reveal" style="--delay:${i*60}ms">
        <img src="./assets/productos/${img}" alt="${name}" loading="lazy" width="320" height="240">
        <div class="product-info"><h3>${name}</h3><p>${desc}</p>
        <a class="product-quote" href="#" data-product="${name}" target="_blank" rel="noopener noreferrer">Consultar producto <i data-lucide="arrow-up-right"></i></a></div>
      </article>`).join('')}</div>
  </div></section>`;
}
