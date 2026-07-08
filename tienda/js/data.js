/* ============================================================
   NANAI NANAI · data.js
   Capa de datos (única fuente de verdad para JS).
   Catálogo, adicionales, tarjetones y reseñas.
   ============================================================ */
window.NANAI = window.NANAI || {};

/* Precio en CLP */
NANAI.clp = function (n) { return '$' + n.toLocaleString('es-CL') + ' CLP'; };
/* Precio corto (sin sufijo CLP) — para tarjetas */
NANAI.clpShort = function (n) { return '$' + n.toLocaleString('es-CL'); };

/* Territorios */
NANAI.territories = {
  contencion: 'Contención',
  memoria: 'Memoria',
  renacer: 'Renacer'
};

/* Opciones de tarjetón (compartidas) */
NANAI.tarjetones = [
  'Para algunos momentos…',
  'Hay algunos que traen…',
  'Cuando los que amamos parten…',
  'Nunca se van…',
  'Quien pasó por nuestra vida…',
  'Aquellos que amamos no se van…'
];

/* Adicionales con precio (CLP) */
NANAI.adicionales = [
  { id: 'vida',    label: 'Opción Vida',                          price: 8900 },
  { id: 'hilo1',   label: 'Hilo Rojo Individual',                 price: 3900 },
  { id: 'hilo2',   label: 'Dúo Hilo Rojo',                        price: 6900 },
  { id: 'hilo3',   label: 'Trio Hilo Rojo',                       price: 9900 },
  { id: 'hilo4',   label: 'Cuatro Hilo Rojo',                     price: 12900 },
  { id: 'hilo5',   label: 'Cinco Hilo Rojo',                      price: 15900 },
  { id: 'choco',   label: 'Pirámide Chocolates',                  price: 7900 },
  { id: 'libro',   label: 'Libro de acompañamiento en el duelo',  price: 11900 }
];

/* Catálogo de productos · fuente única de verdad (sincroniza cards de home,
   catálogo y PDP). Datos desde product.json. */
NANAI.products = {
  'abrigo': {
    id: 'abrigo', name: 'Caja Abrigo', territory: 'contencion',
    price: 45000, cost: 22000, stock: 20, personalizable: true,
    images: ['prod-001.png'],
    desc: 'Manta de alpaca, té, vela y una carta escrita para abrazar.',
    lead: 'Un refugio cálido en momentos difíciles. Diseñada para abrazar el alma cuando más se necesita, combinando texturas suaves y aromas delicados que transmiten calma, cobijo y protección.',
    content: [
      'Manta de alpaca', 'Té', 'Vela', 'Carta', 'Calcetines suaves',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'calidez': {
    id: 'calidez', name: 'Caja Calidez', territory: 'contencion',
    price: 38000, cost: 18000, stock: 40, personalizable: false,
    images: ['prod-002.png'],
    desc: 'Café o té premium, tazón, galletas artesanales y miel para la pausa.',
    lead: 'Un espacio para encender la paz en medio de la rutina o la adversidad. Una selección delicada que invita a la pausa, al autocuidado y a reconectarse con los pequeños e íntimos placeres cotidianos.',
    content: [
      'Café o té premium', 'Tazón', 'Galletas artesanales', 'Miel', 'Vela',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'te-acompano': {
    id: 'te-acompano', name: 'Caja Te Acompaño', territory: 'contencion',
    price: 35000, cost: 16500, stock: 50, personalizable: true,
    images: ['prod-003.png'],
    desc: 'Infusiones, miel y un cuaderno para el desahogo silencioso.',
    lead: 'La presencia perfecta cuando las palabras no alcanzan. Un puente ideal para entregar un apoyo silencioso pero profundo, promoviendo un espacio seguro para la introspección y el desahogo emocional.',
    content: [
      'Mezcla de infusiones', 'Miel', 'Cuaderno', 'Lápiz', 'Carta',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'memoria': {
    id: 'memoria', name: 'Caja Memoria', territory: 'memoria',
    price: 42000, cost: 20000, stock: 10, personalizable: true,
    images: ['prod-004.png'],
    desc: 'Portarretrato, vela y cuaderno de recuerdos para honrar lo que fue.',
    lead: 'Un homenaje al amor que trasciende el tiempo. Espacio sagrado y sutil creado para honrar los recuerdos, sanar a través de pequeños rituales y mantener viva la esencia de quienes siempre nos acompañarán.',
    content: [
      'Portarretrato', 'Vela', 'Cuaderno de recuerdos', 'Semillas para plantar', 'Tarjeta conmemorativa',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'dulzura': {
    id: 'dulzura', name: 'Caja Dulzura', territory: 'memoria',
    price: 32000, cost: 15000, stock: 50, personalizable: false,
    images: ['prod-005.png'],
    desc: 'Chocolates, libro ilustrado y lápices de colores para los más pequeños.',
    lead: 'Contención y ternura pensada especialmente para los más pequeños. Un bálsamo de color, dulzura y creatividad diseñado para abrazar sus emociones y acompañar sus procesos de forma lúdica y amorosa.',
    content: [
      'Chocolates', 'Dulces artesanales', 'Libro ilustrado', 'Cuaderno', 'Lápices de colores',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'cuidado': {
    id: 'cuidado', name: 'Caja Cuidado para Ti', territory: 'renacer',
    price: 40000, cost: 19000, stock: 14, personalizable: false,
    images: ['prod-006.png'],
    desc: 'Sales de baño, jabones y aceites para un ritual de amor propio.',
    lead: 'Un ritual íntimo de renovación y amor propio para celebrar nuevos comienzos o transiciones importantes. Un espacio de bienestar absoluto para mimar el cuerpo, calmar la mente y reconectar con la energía vital.',
    content: [
      'Sales de baño', 'Jabones', 'Aceites', 'Mascarilla facial', 'Té relajante',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  },
  'te-festejo': {
    id: 'te-festejo', name: 'Caja Te Festejo', territory: 'renacer',
    price: 55000, cost: 26000, stock: 30, personalizable: true,
    images: ['prod-007.png'],
    desc: 'Vino premium, copas y chocolates para brindar por la vida.',
    lead: 'Para brindar con el alma por los logros, las nuevas etapas y las alegrías de la vida. Una celebración sofisticada, cálida y emotiva, diseñada minuciosamente para atesorar momentos felices y significativos.',
    content: [
      'Vino premium', 'Copas', 'Tabla pequeña', 'Chocolates', 'Tarjeta de celebración',
      'Carta personalizada', 'Tarjeta para el remitente', 'Ritual simbólico', 'Objeto recuerdo'
    ]
  }
};

/* Orden de despliegue en el catálogo */
NANAI.order = ['abrigo', 'calidez', 'te-acompano', 'memoria', 'dulzura', 'cuidado', 'te-festejo'];

/* Reseñas por producto */
NANAI.reviews = {
  'abrigo': [
    { author: 'Catalina R.',  date: '12 jun 2026', stars: 5, text: 'Llegó impecable y a tiempo. La familia quedó muy conmovida con el detalle. Gracias por acompañar en un momento tan difícil.' },
    { author: 'Javier M.',    date: '3 jun 2026',  stars: 5, text: 'Se nota el cuidado en cada elemento. La carta personalizada hizo toda la diferencia.' },
    { author: 'Andrea L.',    date: '24 may 2026', stars: 5, text: 'Lo envié a una amiga en un momento muy difícil. Me escribió llorando de agradecimiento.' }
  ],
  'calidez': [
    { author: 'Paula H.',   date: '5 jun 2026',  stars: 5, text: 'Perfecta para regalar una pausa. Todo de muy buena calidad.' },
    { author: 'Ignacio T.', date: '21 may 2026', stars: 4, text: 'Muy linda y bien presentada. Llegó en 24 horas a Santiago.' }
  ],
  'te-acompano': [
    { author: 'Sofía A.',  date: '1 jun 2026',  stars: 5, text: 'El detalle justo cuando las palabras no alcanzan. Precioso.' },
    { author: 'Matías N.', date: '18 may 2026', stars: 5, text: 'Empaque premium y atención excelente por WhatsApp.' }
  ],
  'memoria': [
    { author: 'Francisca O.', date: '30 may 2026', stars: 5, text: 'Un homenaje muy especial. Emotivo y con muy buen gusto en todo.' },
    { author: 'Antonia M.',   date: '4 jun 2026',  stars: 5, text: 'La caja completa me hizo llorar. Todo hecho con mucho amor.' }
  ],
  'dulzura': [
    { author: 'Valentina C.', date: '7 jun 2026',  stars: 5, text: 'Ideal para los más pequeños. Colorida, tierna y de gran calidad.' },
    { author: 'Diego R.',     date: '26 may 2026', stars: 5, text: 'Un acierto total. Venía muy bien embalado.' }
  ],
  'cuidado': [
    { author: 'María José V.', date: '9 may 2026',  stars: 5, text: 'Un ritual de autocuidado completo. Me encantó de principio a fin.' },
    { author: 'Rodrigo P.',    date: '20 may 2026', stars: 4, text: 'Muy bueno todo. El despacho a regiones tardó un día más de lo estimado.' }
  ],
  'te-festejo': [
    { author: 'Camila F.', date: '10 may 2026', stars: 5, text: 'Brindamos con el alma. Elegante, cálido y emotivo.' },
    { author: 'Tomás G.',  date: '24 abr 2026', stars: 5, text: 'Empaque premium y presentación impecable. Volvería a comprar sin dudar.' }
  ]
};

/* ---- Render de tarjetas · una sola fuente para home + catálogo ----
   cardHTML(p, mini): variante compacta (mini) para el home; completa para el catálogo. */
NANAI.cardHTML = function (p, mini) {
  var tname = NANAI.territories[p.territory];
  var sold = p.soldout || p.stock <= 0;
  var low = !sold && p.stock <= 15;
  var cls = 'product-card' + (mini ? ' product-card--mini' : '') + (sold ? ' product-card--soldout' : '');
  return '<article class="' + cls + '" data-territory="' + p.territory + '">' +
    '<a class="product-card__media" href="producto.html?id=' + p.id + '" aria-label="' + p.name + '">' +
      '<span class="tag tag--' + p.territory + ' product-card__tag">' + tname + '</span>' +
      '<img src="../images/product/' + p.images[0] + '" alt="' + p.name + '" loading="lazy">' +
    '</a>' +
    '<div class="product-card__body">' +
      '<h3 class="product-card__title"><a href="producto.html?id=' + p.id + '">' + p.name + '</a></h3>' +
      (mini ? '' : '<p class="product-card__desc">' + p.desc + '</p>') +
      (!mini && low ? '<p class="product-card__stock">Quedan ' + p.stock + ' unidades</p>' : '') +
      '<div class="product-card__foot">' +
        '<span class="product-card__price">' + NANAI.clpShort(p.price) + '</span>' +
      '</div>' +
      (mini ? '' : (sold
        ? '<a class="product-card__add btn btn--secondary" href="producto.html?id=' + p.id + '">Ver detalle</a>'
        : '<button type="button" class="product-card__add btn btn--dark" data-add="' + p.id + '" data-drawer-open>Agregar al carro</button>')) +
    '</div>' +
  '</article>';
};

/* Renderiza NANAI.order (o un subconjunto) dentro del selector dado.
   mini=true usa la tarjeta compacta. Devuelve el número de productos pintados. */
NANAI.renderGrid = function (sel, slugs, mini) {
  var grid = document.querySelector(sel);
  if (!grid) return 0;
  var ids = slugs || NANAI.order;
  grid.innerHTML = ids.map(function (id) {
    var p = NANAI.products[id];
    return p ? NANAI.cardHTML(p, mini) : '';
  }).join('');
  return ids.length;
};

/* Costo de envío por región (CLP) */
NANAI.shipping = {
  'Región Metropolitana': 3990,
  'Valparaíso': 5990,
  'Biobío': 6990,
  'Araucanía': 7990,
  'Otra región': 8990
};
