const benefits=[
  ['truck','Entrega local','En San Pedro Sula'],
  ['badge-check','Productos de calidad','Soluciones para empresas'],
  ['headset','Asesoría personalizada','Para tu operación'],
  ['layers','Variedad de suministros','Todo en un solo lugar']
];
export function beneficios() {
  return `<!-- Estos beneficios resumen lo que EMPAQ ofrece a sus clientes. -->
  <section class="benefits"><div class="container benefits-grid">${benefits.map(([icon,title,desc])=>`
    <div class="benefit reveal"><i data-lucide="${icon}"></i><div><strong>${title}</strong><span>${desc}</span></div></div>`).join('')}</div></section>`;
}
