// Catálogo completo oficial de EMPAQ con productos, medidas y troqueles
export const catalogData = {
  etiquetas: {
    title: 'Etiquetas Adhesivas y Troqueles',
    subtitle: 'Fabricante y convertidor en San Pedro Sula. Troquelado libre y medidas en stock.',
    heroBadge: 'Personalizadas y en stock',
    stockImage: './assets/stock/etiquetas-stock.jpg',
    stockCaption: 'Etiquetado comercial y personalizado para botellas, envases de producto y trazabilidad logística.',
    stockTag: 'Envasado y logística',
    sections: [
      {
        title: 'Troqueles Disponibles (Convertidores de Etiquetas)',
        description: 'Troqueles disponibles para fabricación inmediata. Cores: 1", 1.5" y 3".',
        subcategories: [
          {
            name: 'Troqueles Rectangulares',
            badge: '26+ medidas',
            items: [
              '1" × 1"', '1" × 1.5"', '1" × 1.75"', '1" × 2"', '1" × 4"',
              '1.5" × 2"', '2" × 2"', '2" × 2.5"', '2.5" × 2.5"', '2" × 3"', '2" × 4"',
              '3" × 2"', '3" × 3"', '3" × 4"', '3.5" × 3.5"', '0.39" × 3.5"',
              '4" × 2"', '4" × 4"', '5" × 4"', '6" × 4"', '7" × 4"', '8" × 4"',
              '9" × 4"', '10" × 4"', '11" × 4"', '12" × 4"'
            ]
          },
          {
            name: 'Troqueles Circulares',
            badge: '15 medidas',
            items: [
              '3/8"', '1/2"', '5/8"', '3/4"', '1"', '1 1/4"', '1 1/2"',
              '2"', '2.5"', '3"', '3.5"', '4"', '4.5"', '5"', '5.5"'
            ]
          },
          {
            name: 'Troqueles Ovalados',
            badge: '6 medidas',
            items: [
              '1" × 1 3/4"', '1 1/2" × 2 1/4"', '2" × 3"',
              '3" × 4.5"', '3 1/4" × 4 3/4"', '3.5" × 5.5"'
            ]
          },
          {
            name: 'Butt-Cut (Corte continuo)',
            badge: 'Al hilo',
            items: ['Corte al hilo continuo sin separación entre etiquetas, ideal para tickets, cupones y etiquetas de bajo desperdicio.']
          }
        ]
      },
      {
        title: 'Etiquetas en Stock (Entrega Rápida)',
        description: 'Medidas estándar listas para despacho, para envíos, logística y códigos de barras.',
        stockSizes: [
          '6" × 4"', '4" × 4"', '3" × 4"', '2" × 4"', '1" × 4"',
          '3" × 3"', '2" × 3"', '1" × 3"', '1.5" × 2"', '1" × 2"',
          '1.2" × 0.7"', '27 mm × 40 mm'
        ]
      },
      {
        title: 'Etiquetas Personalizadas en Bobina',
        description: 'Impresión en rollo a todo color o blanco y negro sobre papel estucado adhesivo de alta resistencia, con acabado anti-rayas para envases, botellas y productos comerciales.'
      }
    ]
  },
  stretch: {
    title: 'Película Strech Film y Paletizado',
    subtitle: 'Soluciones de embalaje para fijar, resguardar y transportar cargas de forma segura.',
    heroBadge: 'Uso industrial y manual',
    stockImage: './assets/stock/stretch-stock.jpg',
    stockCaption: 'Paletizado seguro de cajas y carga industrial sobre pallets en centros de distribución y bodega.',
    stockTag: 'Paletizado y protección de carga',
    sections: [
      {
        title: 'Film Estirable Manual (3 Capas)',
        description: 'Elaborado en polietileno tricapa de alta elasticidad y excelente memoria elástica. Desenrollado suave y silencioso para proteger tus palets de suciedad y humedad.',
        specs: [
          { label: 'Medida 1', value: '18" × 1500 pies' },
          { label: 'Medida 2', value: '18" × 1200 pies' },
          { label: 'Medida 3', value: '18" × 1000 pies' }
        ]
      },
      {
        title: 'Film Preestirado Manual Ecológico',
        description: 'Plástico de embalar pretensado de fábrica. Permite paletizar más rápido y con menor esfuerzo físico, generando 2 veces menos residuos y reduciendo el consumo de plástico.',
        specs: [
          { label: 'Medida especial', value: '18" × 2000 pies PRESTIRADO' }
        ]
      },
      {
        title: 'Fleje y Accesorios para Paletizar',
        description: 'Flejes plásticos y materiales para atar, agrupar y consolidar pallets de carga pesada en centros de distribución y transporte.'
      }
    ]
  },
  cintas: {
    title: 'Cintas Adhesivas y Materiales de Empaque',
    subtitle: 'Variedad de adhesivos para cerrado de cajas, procesos industriales, pintura y aislamiento.',
    heroBadge: 'Medidas estándar y personalizadas',
    stockImage: './assets/stock/cintas-stock.jpg',
    stockCaption: 'Sellado rápido y seguro de cajas de cartón corrugado para despachos y almacenamiento.',
    stockTag: 'Embalaje y sellado de cajas',
    sections: [
      {
        title: 'Cintas Adhesivas Transparentes y Avana (Café)',
        description: 'Cintas de polipropileno de alta adherencia para cerrado manual o con dispensador de cajas de cartón corrugado.',
        sizes: [
          '1/2" × 72 yds', '3/4" × 36 yds', '3/4" × 72 yds',
          '2" × 50 yds', '2" × 100 yds', '2" × 200 yds', '3" × 100 yds'
        ]
      },
      {
        title: 'Cintas Masking Tape (Uso General y Automotriz)',
        description: 'Diseñadas para enmascarar, delinear pintura automotriz, sellar y empacar. No dejan residuos de goma al despegar.',
        sizes: [
          '1/2" × 30 yds', '3/4" × 30 yds', '1" × 30 yds',
          '1-1/2" × 30 yds', '2" × 30 yds', '3" × 30 yds'
        ]
      },
      {
        title: 'Cintas Ducto Tela Gris',
        description: 'Cinta ducto de tela con adhesivo caucho de máxima resistencia ante la humedad. Indicada para aislamiento en aire acondicionado y reparaciones industriales.',
        sizes: [
          '2" × 10 yds', '2" × 40 yds'
        ]
      },
      {
        title: 'Cintas Personalizadas con tu Logo',
        description: 'Impresas con la marca de tu empresa, logotipo o textos de seguridad como "Frágil" y sellos de garantía.'
      }
    ]
  },
  'papel-pos': {
    title: 'Papel POS y Rollos Térmicos',
    subtitle: 'Rollos para puntos de venta, facturación fiscal, cajas registradoras y calculadoras.',
    heroBadge: 'Químico, bond e impreso',
    stockImage: './assets/stock/papel-pos-stock.jpg',
    stockCaption: 'Facturación continua en puntos de venta, cajas registradoras, gasolineras, farmacias y comercios.',
    stockTag: 'Puntos de venta y facturación',
    sections: [
      {
        title: 'Rollo de Papel Químico (Autocopiante)',
        description: 'Excelente transferencia de copia desde la cara original sin papel carbón. Para gasolineras, farmacias, restaurantes y comercios.',
        specs: [
          { label: 'Duplicado (Blanco/Amarillo)', value: '76 mm × 18 m / 27 m / 32 m' },
          { label: 'Triplicado (Blanco/Amarillo/Rosado)', value: '76 mm × 18 m / 27 m / 32 m' }
        ]
      },
      {
        title: 'Rollo de Papel Bond',
        description: 'Papel blanco de primera calidad para cajas registradoras, calculadoras y sumadoras de oficina.',
        sizes: [
          '57 mm × 32 m', '70 mm × 42 m', '76 mm × 42 m', '76 mm × 64 m'
        ]
      },
      {
        title: 'Rollo de Papel POS Impreso',
        description: 'Rollos personalizados con tu logotipo al reverso o al frente, políticas de devolución o avisos comerciales.'
      }
    ]
  },
  impresoras: {
    title: 'Impresoras de Etiquetas y Código de Barras',
    subtitle: 'Equipos profesionales para logística, manufactura, retail, salud y distribución.',
    heroBadge: 'Marcas líderes: TSC y Zebra',
    stockImage: './assets/stock/impresoras-stock.jpg',
    stockCaption: 'Impresión térmica industrial y de escritorio para códigos de barras, rutas de entrega y trazabilidad.',
    stockTag: 'Equipamiento térmico e industrial',
    sections: [
      {
        title: 'Impresoras Industriales de Alto Rendimiento',
        description: 'Chasis metálico resistente para operaciones intensivas 24/7 en bodegas, fábricas y centros logísticos. Alta velocidad y compatibilidad de rollos grandes.'
      },
      {
        title: 'Impresoras de Escritorio Compactas',
        description: 'Equipos compactos de transferencia térmica y térmico directo para tiendas, oficinas, clínicas y laboratorios.'
      },
      {
        title: 'Impresoras Portátiles y Móviles',
        description: 'Equipos ligeros para trabajo en campo, emisión de etiquetas de picking, envíos y cobranza en ruta.'
      },
      {
        title: 'Tecnologías y Repuestos',
        description: 'Soporte para Térmico Directo (sin ribbon) y Transferencia Térmica. Suministro de cabezales de impresión y repuestos originales.'
      }
    ]
  },
  ribbons: {
    title: 'Ribbons Térmicos para Impresoras (TTR)',
    subtitle: 'Consumibles de transferencia térmica de alta durabilidad para impresión de códigos de barras.',
    heroBadge: 'Cera, Resina y Cera/Resina',
    stockImage: './assets/stock/ribbons-stock.jpg',
    stockCaption: 'Consumibles de transferencia térmica para impresión nítida, de larga duración y resistencia al calor.',
    stockTag: 'Transferencia térmica duradera',
    sections: [
      {
        title: 'Ribbon de Cera',
        description: 'La opción más económica y versátil para impresión de etiquetas de papel mate o satinado. Ideal para códigos de barras, logística y envíos.'
      },
      {
        title: 'Ribbon Cera / Resina (Mixto)',
        description: 'Mayor resistencia al roce, fricción y humedad moderada. Excelente nitidez en etiquetas semibrillantes y papeles sintéticos.'
      },
      {
        title: 'Ribbon de Resina Pura',
        description: 'Máxima durabilidad y resistencia extrema ante solventes, químicos, calor, frío y abrasión. Para etiquetas de polipropileno (BOPP) y poliéster.'
      },
      {
        title: 'Compatibilidad de Mandril y Anchos',
        description: 'Bobinas con capa de poliéster, mandril de 0.5" y 1", con cabecera y sensor de fin de rollo compatibles con Zebra, TSC, Honeywell y Datamax.'
      }
    ]
  }
};

