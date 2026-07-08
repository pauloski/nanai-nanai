/* ============================================================
   NANAI NANAI · pdp.js
   Detalle de producto data-driven (?id=). Galería, adicionales,
   reseñas reales y "Agregar al carrito" conectado a cart.js.
   ============================================================ */
(function () {
  'use strict';
  var root = document.querySelector('[data-pdp]');
  if (!root) return;

  var clp = NANAI.clp;
  var params = new URLSearchParams(location.search);
  var id = params.get('id') || 'abrigo';
  var p = NANAI.products[id] || NANAI.products['abrigo'];
  var tname = NANAI.territories[p.territory];

  var $ = function (s) { return root.querySelector(s); };

  /* ---------- Cabecera ---------- */
  document.title = p.name + ' · Nanai Nanai';
  set('[data-pdp-breadcrumb-terr]', tname);
  set('[data-pdp-breadcrumb-name]', p.name);
  set('[data-pdp-title]', p.name);
  set('[data-pdp-price]', clp(p.price));
  var tag = $('[data-pdp-tag]');
  if (tag) { tag.textContent = tname; tag.className = 'tag tag--' + p.territory; tag.style.marginBottom = 'var(--space-3)'; }

  /* ---------- Stock + personalizable ---------- */
  var stockEl = $('[data-pdp-stock]');
  if (stockEl) {
    if (p.soldout || p.stock <= 0) {
      stockEl.textContent = 'Agotado';
      stockEl.className = 'stock-badge is-out';
    } else if (p.stock <= 15) {
      stockEl.textContent = '¡Últimas ' + p.stock + ' unidades!';
      stockEl.className = 'stock-badge is-low';
    } else {
      stockEl.textContent = 'En stock · ' + p.stock + ' disponibles';
      stockEl.className = 'stock-badge';
    }
  }

  /* ---------- Galería ---------- */
  var main = $('[data-gallery-main]');
  if (main) main.src = '../images/product/' + p.images[0];
  var thumbs = $('[data-gallery-thumbs]');
  if (thumbs) {
    thumbs.innerHTML = p.images.map(function (img, i) {
      return '<button class="gallery__thumb' + (i === 0 ? ' is-active' : '') + '" data-gallery-thumb>' +
        '<img src="../images/product/' + img + '" data-full="../images/product/' + img + '" alt="' + p.name + ' vista ' + (i + 1) + '"></button>';
    }).join('');
    thumbs.addEventListener('click', function (e) {
      var t = e.target.closest('[data-gallery-thumb]');
      if (!t || !main) return;
      thumbs.querySelectorAll('[data-gallery-thumb]').forEach(function (x) { x.classList.remove('is-active'); });
      t.classList.add('is-active');
      var im = t.querySelector('img');
      main.src = im.getAttribute('data-full') || im.src;
    });
  }

  /* ---------- Reseñas / rating ---------- */
  var reviews = NANAI.reviews[id] || [];
  var avg = reviews.length ? reviews.reduce(function (s, r) { return s + r.stars; }, 0) / reviews.length : 5;
  var rounded = Math.round(avg);
  var starsStr = '★★★★★☆☆☆☆☆'.substr(5 - rounded, 5);
  var starsEl = $('[data-pdp-rating-stars]');
  if (starsEl) starsEl.textContent = starsStr;
  set('[data-pdp-review-count]', reviews.length + (reviews.length === 1 ? ' Reseña' : ' Reseñas'));

  var revWrap = $('[data-pdp-reviews]');
  if (revWrap) {
    revWrap.innerHTML = reviews.map(function (r) {
      var rs = '★★★★★☆☆☆☆☆'.substr(5 - r.stars, 5);
      return '<article class="review">' +
        '<header class="review__head">' +
          '<span class="review__author">' + r.author + '</span>' +
          '<span class="review__stars" aria-label="' + r.stars + ' de 5">' + rs + '</span>' +
        '</header>' +
        '<time class="review__date">' + r.date + '</time>' +
        '<p class="review__text">' + r.text + '</p>' +
      '</article>';
    }).join('');
  }

  /* ---------- Bajada + contenido ---------- */
  set('[data-pdp-lead]', p.lead);
  var content = $('[data-pdp-content]');
  if (content) content.innerHTML = p.content.map(function (c) { return '<li>' + c + '</li>'; }).join('');

  /* ---------- Tarjetón (opciones) ---------- */
  var sel = $('[data-tarjeton]');
  if (sel) {
    sel.innerHTML = '<option value="" selected>Elige tu mensaje abajo</option>' +
      NANAI.tarjetones.map(function (t) { return '<option>' + t + '</option>'; }).join('');
  }

  /* ---------- Adicionales (píldoras) ---------- */
  var pillSet = $('[data-adicionales]');
  if (pillSet) {
    pillSet.innerHTML = NANAI.adicionales.map(function (a) {
      return '<button type="button" class="pill" data-adic-id="' + a.id + '" data-adic-label="' + a.label +
        '" data-adic-price="' + a.price + '" aria-pressed="false">' + a.label +
        ' <span class="pill__price">' + clp(a.price) + '</span></button>';
    }).join('');
  }

  /* Toggle de píldoras + campo condicional de hilos */
  var conditional = $('[data-conditional]');
  function refreshConditional() {
    if (!conditional) return;
    var anyHilo = root.querySelectorAll('.pill.is-selected[data-adic-id]').length
      ? Array.prototype.some.call(root.querySelectorAll('.pill.is-selected[data-adic-id]'), function (p) {
          return /hilo/.test(p.getAttribute('data-adic-id'));
        })
      : false;
    conditional.hidden = !anyHilo;
  }
  if (pillSet) {
    pillSet.addEventListener('click', function (e) {
      var pill = e.target.closest('.pill');
      if (!pill) return;
      var on = pill.classList.toggle('is-selected');
      pill.setAttribute('aria-pressed', on ? 'true' : 'false');
      refreshConditional();
    });
  }

  /* ---------- Soldout ---------- */
  var addBtn = $('[data-add-to-cart]');
  if (p.soldout && addBtn) {
    addBtn.textContent = 'Agotado';
    addBtn.setAttribute('aria-disabled', 'true');
    addBtn.classList.remove('btn--dark');
    addBtn.classList.add('btn--secondary');
    addBtn.removeAttribute('data-drawer-open');
  }

  /* ---------- Agregar al carrito ---------- */
  if (addBtn && !p.soldout) {
    addBtn.addEventListener('click', function () {
      var qtyOut = root.querySelector('.qty output');
      var qty = qtyOut ? parseInt(qtyOut.textContent, 10) || 1 : 1;
      var adic = Array.prototype.map.call(root.querySelectorAll('.pill.is-selected[data-adic-id]'), function (p) {
        return { label: p.getAttribute('data-adic-label'), price: +p.getAttribute('data-adic-price') };
      });
      var msg = root.querySelector('[data-msg]');
      var firma = root.querySelector('[data-firma]');
      NANAI.cart.add({
        pid: p.id, name: p.name, image: p.images[0],
        territory: p.territory, tname: tname, base: p.price, qty: qty,
        tarjeton: sel ? sel.value : '',
        adicionales: adic,
        mensaje: msg ? msg.value.trim() : '',
        firma: firma ? firma.value.trim() : ''
      });
      var original = 'Agregar al carrito';
      addBtn.textContent = '✓ Agregado';
      setTimeout(function () { addBtn.textContent = original; }, 1600);
    });
  }

  function set(sel, txt) {
    var el = root.querySelector(sel);
    if (el) el.textContent = txt;
  }
})();
