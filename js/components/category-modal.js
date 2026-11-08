import { catalogData } from '../data/catalog.js';

export function categoryModal() {
  return `<!-- Ventana emergente para explorar todo el catálogo de cada categoría -->
  <div class="cat-modal" id="categoryModal" role="dialog" aria-hidden="true" aria-labelledby="catModalTitle">
    <div class="cat-modal-dialog">
      <div class="cat-modal-header">
        <div class="cat-modal-header-copy">
          <h3 id="catModalTitle"></h3>
          <p id="catModalSubtitle"></p>
          <span class="cat-modal-badge" id="catModalBadge"></span>
        </div>
        <button class="cat-modal-close" type="button" aria-label="Cerrar ventana"><i data-lucide="x"></i></button>
      </div>
      <div class="cat-modal-body" id="catModalBody"></div>
      <div class="cat-modal-footer">
        <button class="btn btn-outline cat-modal-cancel" type="button">Cerrar</button>
        <a class="btn btn-primary" id="catModalWhatsApp" href="#" target="_blank" rel="noopener noreferrer">
          <i data-lucide="message-circle"></i> Cotizar esta línea por WhatsApp
        </a>
      </div>
    </div>
  </div>`;
}

export function initCategoryModal() {
  const modalEl = document.getElementById('categoryModal');
  if (!modalEl) return;

  const titleEl = document.getElementById('catModalTitle');
  const subtitleEl = document.getElementById('catModalSubtitle');
  const badgeEl = document.getElementById('catModalBadge');
  const bodyEl = document.getElementById('catModalBody');
  const waBtn = document.getElementById('catModalWhatsApp');

  function open(catKey) {
    const data = catalogData[catKey];
    if (!data) return;

    titleEl.textContent = data.title;
    subtitleEl.textContent = data.subtitle;
    badgeEl.textContent = data.heroBadge;

    const waText = `Hola, buen día. Estoy consultando el catálogo de ${data.title} en su página web y deseo solicitar una cotización.`;
    waBtn.href = `https://wa.me/50499043670?text=${encodeURIComponent(waText)}`;

    // Hero image with stock application context
    const heroHtml = data.stockImage ? `
      <div class="cat-modal-hero">
        <div class="cat-modal-hero-media">
          <img src="${data.stockImage}" alt="${data.title} en aplicación comercial" loading="lazy">
          <span class="cat-modal-hero-pill"><i data-lucide="sparkles"></i> ${data.stockTag || 'Aplicación comercial'}</span>
        </div>
        <div class="cat-modal-hero-caption">
          <i data-lucide="camera"></i>
          <span><strong>En uso real:</strong> ${data.stockCaption}</span>
        </div>
      </div>
    ` : '';

    // Build content sections
    const sectionsHtml = data.sections.map(sec => {
      let content = `<p>${sec.description || ''}</p>`;

      // If section has subcategories (like Troqueles)
      if (sec.subcategories) {
        content += sec.subcategories.map(sub => `
          <div class="subcat-box">
            <div class="subcat-title">
              <span>${sub.name}</span>
              <span class="subcat-badge">${sub.badge}</span>
            </div>
            <div class="pill-grid">
              ${sub.items.map(it => `<span class="pill-tag">${it}</span>`).join('')}
            </div>
          </div>
        `).join('');
      }

      // If section has stockSizes
      if (sec.stockSizes) {
        content += `
          <div class="pill-grid">
            ${sec.stockSizes.map(s => `<span class="pill-tag">${s}</span>`).join('')}
          </div>
        `;
      }

      // If section has sizes
      if (sec.sizes) {
        content += `
          <div class="pill-grid">
            ${sec.sizes.map(s => `<span class="pill-tag">${s}</span>`).join('')}
          </div>
        `;
      }

      // If section has specs
      if (sec.specs) {
        content += `
          <table class="specs-table">
            <tbody>
              ${sec.specs.map(sp => `
                <tr>
                  <td>${sp.label}</td>
                  <td>${sp.value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }

      return `
        <div class="cat-modal-section">
          <h4>${sec.title}</h4>
          ${content}
        </div>
      `;
    }).join('');

    bodyEl.innerHTML = heroHtml + sectionsHtml;

    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.lucide?.createIcons({ attrs: { 'stroke-width': 1.8 } });
  }

  function close() {
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalEl.querySelectorAll('.cat-modal-close, .cat-modal-cancel').forEach(btn => {
    btn.addEventListener('click', close);
  });

  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('active')) close();
  });

  // Attach click listener to each category card
  document.querySelectorAll('[data-category-key]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const key = card.dataset.categoryKey;
      open(key);
    });
  });
}

