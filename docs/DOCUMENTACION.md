# EMPAQ — Documentación técnica para desarrolladores e IA

## Objetivo
Landing page estática, responsive y modular de EMPAQ, proveedor de etiquetas, empaques y suministros industriales en San Pedro Sula, Honduras. No hay carrito, checkout, cuentas ni backend. Objetivo: presentar productos y generar cotizaciones por WhatsApp.

## Reglas del cliente
1. HTML, CSS y JavaScript separados.
2. Cada sección es independiente y se integra desde un archivo principal.
3. Todos los recursos gráficos se guardan en `assets/`.
4. Respetar la maqueta aprobada: blanco, azul industrial y naranja; productos destacados, categorías y CTA.
5. Mantener este documento actualizado para que otra IA pueda continuar el trabajo.
6. Comentarios naturales de una sola línea.
7. Animaciones modernas, suaves y accesibles.
8. Botones funcionales de WhatsApp.
9. Iconos outline desde la librería web Lucide.
10. WhatsApp oficial: **+504 9904-3670**.

## Estructura
- `index.html`: HTML principal, SEO, carga de CSS y módulo JS.
- `css/main.css`: importa todas las hojas CSS y estilos comunes.
- `css/variables.css`: variables de color, sombras y tamaños.
- `css/header.css`, `hero.css`, `beneficios.css`, `productos.css`, `contacto.css`, `footer.css`, `animaciones.css`, `category-modal.css`: estilos independientes por sección.
- `js/data/catalog.js`: base de datos estructurada con el catálogo completo, medidas y troqueles.
- `js/main.js`: integra los componentes, inicializa menú, WhatsApp, animaciones, ventana emergente e iconos.
- `js/components/header.js`: barra de contacto, logo, menú y navegación móvil.
- `js/components/hero.js`: portada y botones principales.
- `js/components/beneficios.js`: cuatro beneficios.
- `js/components/productos.js`: sección principal de productos con acceso a catálogo emergente; datos en `products`.
- `js/components/category-modal.js`: ventana emergente interactiva para consultar todo el catálogo, medidas y troqueles por producto.
- `js/components/contacto.js`: banner y CTA de contacto.
- `js/components/footer.js`: enlaces, contacto, ubicación física y botón flotante.
- `js/menu.js`: menú móvil, Escape y cierre al navegar.
- `js/whatsapp.js`: enlaces `wa.me` y mensajes por producto.
- `js/animaciones.js`: entradas al hacer scroll con IntersectionObserver.
- `assets/logos/`: símbolo original suministrado por el cliente.
- `assets/productos/`: fotografías limpias de producto en fondo blanco.
- `assets/stock/`: fotografías comerciales de stock que muestran cada producto en aplicación real (almacén, sellado de cajas, etiquetado de envases, POS, impresión térmica).
- `assets/banners/`: imágenes de portada y CTA.

## Flujo de funcionamiento
1. `index.html` carga `css/main.css` y `js/main.js`.
2. `main.js` importa los componentes y los monta en `#app`.
3. Se activan el menú, los enlaces de WhatsApp, las animaciones y el año del footer.
4. Se carga Lucide desde `https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js` para dibujar iconos de líneas.
5. El usuario navega por anclas internas y solicita cotización mediante `https://wa.me/50499043670?text=...`.

## Diseño responsive
- Escritorio: navegación horizontal, hero de dos columnas, seis categorías y cinco productos por fila.
- Tablet: menú compacto y cuadrículas de tres columnas.
- Celular: hero apilado, dos columnas para productos y categorías, botones de ancho completo y footer vertical.
- Probar al menos 375, 768, 1024 y 1440 px.

## Animaciones y accesibilidad
- `.reveal` + `.visible` con IntersectionObserver para entradas suaves.
- Hover en tarjetas y botones, sin efectos pesados.
- Se respeta `prefers-reduced-motion`.
- Menú con `aria-expanded`, cierre por Escape, foco visible, enlace «Saltar al contenido» y textos alternativos.

## Recursos externos
- Google Fonts: Inter.
- Lucide Icons vía CDN (estilo outline).
- Si no hay conexión a internet, las imágenes locales y el contenido siguen funcionando, pero pueden faltar fuentes e iconos.

## Cómo ejecutar
Desde la carpeta raíz: `python3 -m http.server 8000` y abrir `http://localhost:8000`.
No abrir directamente con `file://` porque se usan módulos ES6.

## Cómo modificar
- Cambiar los textos del banner en `js/components/hero.js`.
- Añadir categorías en el arreglo `categories` y sus imágenes en `assets/productos/`.
- Añadir productos en el arreglo `products` de `js/components/productos.js`.
- Cambiar el número y mensaje en `js/whatsapp.js`, y actualizar el teléfono visible en header/footer.
- Ajustar colores en `css/variables.css`.
- Para una nueva sección, crear un componente en `js/components/`, su hoja CSS y registrarlos en `js/main.js` y `css/main.css`.
- No agregar carrito, pagos ni librerías de iconos rellenos.

## Antes de publicar
- Las imágenes de productos en `assets/productos/` se están actualizando con las fotografías y fichas oficiales extraídas del catálogo del cliente.
- El símbolo original y los logotipos oficiales completos (`empaq-logo-completo.png` y `empaq-logo-badge.png`) se encuentran en `assets/logos/`.
- Verificar afirmaciones comerciales como «entrega local» y «productos de calidad».
- Correo oficial confirmado e integrado: **ventas@empaqhn.com**.
- El icono de WhatsApp se representa con `message-circle` de Lucide (outline), no con la marca oficial.
- Revisar enlaces, rendimiento Lighthouse, accesibilidad, dominio y HTTPS.
