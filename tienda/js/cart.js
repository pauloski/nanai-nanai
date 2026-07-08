/* ============================================================
   NANAI NANAI · cart.js
   Carrito real con persistencia en localStorage.
   Renderiza: badge, drawer, página de carrito y checkout.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'nanai_cart_v1';
  var ORDER_KEY = 'nanai_last_order';
  var clp = NANAI.clp;

  /* ---------- Estado ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; }
    catch (e) { return null; }
  }
  function save(items) { localStorage.setItem(KEY, JSON.stringify(items)); }

  var state = load();
  // Semilla de demostración solo en la PRIMERA visita (clave ausente).
  if (state === null) {
    var p = NANAI.products['abrigo'];
    state = [{
      pid: p.id, name: p.name, image: p.images[0],
      territory: p.territory, tname: NANAI.territories[p.territory],
      base: p.price, qty: 1,
      tarjeton: 'Nunca se van…',
      adicionales: [
        { label: 'Dúo Hilo Rojo', price: 6900 },
        { label: 'Libro de acompañamiento en el duelo', price: 11900 }
      ],
      mensaje: 'Estamos contigo en este momento. Un abrazo enorme.',
      firma: 'Cata y Javi'
    }];
    save(state);
  }

  /* ---------- Cálculos ---------- */
  function lineExtras(l) { return (l.adicionales || []).reduce(function (s, a) { return s + a.price; }, 0); }
  function lineUnit(l) { return l.base + lineExtras(l); }
  function lineTotal(l) { return lineUnit(l) * l.qty; }
  function subtotal() { return state.reduce(function (s, l) { return s + lineTotal(l); }, 0); }
  function count() { return state.reduce(function (s, l) { return s + l.qty; }, 0); }

  /* ---------- Mutaciones ---------- */
  function add(item) {
    state.push(item);
    save(state); renderAll();
  }
  function setQty(i, q) {
    if (!state[i]) return;
    state[i].qty = Math.max(1, q);
    save(state); renderAll();
  }
  function remove(i) {
    state.splice(i, 1);
    save(state); renderAll();
  }
  function clear() { state = []; save(state); renderAll(); }

  /* ---------- Plantillas ---------- */
  function adicHtml(l) {
    if (!l.adicionales || !l.adicionales.length) return '';
    return l.adicionales.map(function (a) { return a.label; }).join(' · ');
  }

  function drawerLine(l, i) {
    return '' +
    '<div class="cart-line">' +
      '<div class="cart-line__media"><img src="../images/product/' + l.image + '" alt="' + l.name + '"></div>' +
      '<div class="cart-line__info">' +
        '<span class="tag tag--' + l.territory + '">' + l.tname + '</span>' +
        '<span class="cart-line__title">' + l.name + '</span>' +
        (l.tarjeton ? '<span class="cart-line__meta">Tarjetón: “' + l.tarjeton + '”</span>' : '') +
        (adicHtml(l) ? '<span class="cart-line__meta">+ ' + adicHtml(l) + '</span>' : '') +
        '<div class="cluster" style="margin-top:var(--space-2)">' +
          qtyHtml(i) +
          '<button class="btn btn--ghost" style="font-size:var(--fs-xs)" data-remove="' + i + '">Quitar</button>' +
        '</div>' +
      '</div>' +
      '<span class="cart-line__price">' + clp(lineTotal(l)) + '</span>' +
    '</div>';
  }

  function qtyHtml(i) {
    return '<div class="qty" data-line="' + i + '">' +
      '<button type="button" data-qty="-1" aria-label="Restar">−</button>' +
      '<output>' + state[i].qty + '</output>' +
      '<button type="button" data-qty="1" aria-label="Sumar">+</button>' +
    '</div>';
  }

  function emptyHtml(where) {
    return '<div class="cart-empty">' +
      '<p class="muted">Tu carrito está vacío.</p>' +
      '<a class="btn btn--primary" href="catalogo.html">Explorar las cajas</a>' +
    '</div>';
  }

  /* ---------- Renderizado ---------- */
  function renderBadge() {
    var c = count();
    document.querySelectorAll('[data-cart-badge]').forEach(function (b) {
      b.textContent = c;
      b.style.display = c > 0 ? '' : 'none';
    });
  }

  function renderDrawer() {
    var body = document.querySelector('[data-drawer-lines]');
    if (!body) return;
    body.innerHTML = state.length ? state.map(drawerLine).join('') : emptyHtml();
    var sub = document.querySelector('[data-drawer-subtotal]');
    if (sub) sub.textContent = clp(subtotal());
    var foot = document.querySelector('[data-drawer-foot]');
    if (foot) foot.style.display = state.length ? '' : 'none';
  }

  function renderCartPage() {
    var lines = document.querySelector('[data-cart-lines]');
    if (!lines) return;
    lines.innerHTML = state.length ? state.map(drawerLine).join('') : emptyHtml();
    setText('[data-cart-subtotal]', clp(subtotal()));
    setText('[data-cart-total]', clp(subtotal()));
  }

  function renderCheckout() {
    var lines = document.querySelector('[data-checkout-lines]');
    if (!lines) return;
    lines.innerHTML = state.map(function (l) {
      return '<div class="mini-line">' +
        '<div class="mini-line__media"><img src="../images/product/' + l.image + '" alt="' + l.name + '"></div>' +
        '<div style="flex:1">' +
          '<strong style="font-family:var(--font-titles);font-size:var(--fs-md)">' + l.name + '</strong>' +
          '<div class="soft" style="font-size:var(--fs-xs)">Cantidad: ' + l.qty + ' · ' + l.tname + '</div>' +
          (adicHtml(l) ? '<div class="muted" style="font-size:var(--fs-xs)">+ ' + adicHtml(l) + '</div>' : '') +
        '</div>' +
        '<span style="font-weight:600">' + clp(lineTotal(l)) + '</span>' +
      '</div>';
    }).join('');

    // Notas personalizadas (primer ítem con mensaje)
    var notes = document.querySelector('[data-checkout-notes]');
    if (notes) {
      var withMsg = state.filter(function (l) { return l.tarjeton || l.mensaje || l.firma; });
      notes.innerHTML = withMsg.map(function (l) {
        return '<div class="personal-note">' +
          (l.tarjeton ? '<strong>Tarjetón:</strong> “' + l.tarjeton + '”<br>' : '') +
          (l.mensaje ? '<strong>Mensaje:</strong> <em>“' + l.mensaje + '”</em><br>' : '') +
          (l.firma ? '<strong>Firma:</strong> ' + l.firma : '') +
        '</div>';
      }).join('');
    }

    updateCheckoutTotals();
  }

  function updateCheckoutTotals() {
    var sub = subtotal();
    var regionSel = document.querySelector('[data-checkout-region]');
    var region = regionSel ? regionSel.value : 'Región Metropolitana';
    var ship = state.length ? (NANAI.shipping[region] || 3990) : 0;
    setText('[data-checkout-subtotal]', clp(sub));
    setText('[data-checkout-ship]', ship ? clp(ship) : '—');
    setText('[data-checkout-total]', clp(sub + ship));
  }

  function setText(sel, txt) {
    document.querySelectorAll(sel).forEach(function (el) { el.textContent = txt; });
  }

  function renderAll() {
    renderBadge(); renderDrawer(); renderCartPage(); renderCheckout();
  }

  /* ---------- Delegación de eventos (qty / remove) ---------- */
  document.addEventListener('click', function (e) {
    var qBtn = e.target.closest('[data-qty]');
    if (qBtn) {
      var box = qBtn.closest('[data-line]');
      if (box) {
        var i = +box.getAttribute('data-line');
        setQty(i, state[i].qty + (+qBtn.getAttribute('data-qty')));
      }
      return;
    }
    var rm = e.target.closest('[data-remove]');
    if (rm) { remove(+rm.getAttribute('data-remove')); }
  });

  /* ---------- Checkout: recalcular envío y finalizar ---------- */
  document.addEventListener('change', function (e) {
    if (e.target.matches('[data-checkout-region]')) updateCheckoutTotals();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var placeBtn = document.querySelector('[data-place-order]');
    if (placeBtn) {
      placeBtn.addEventListener('click', function () {
        if (!state.length) { alert('Tu carrito está vacío.'); return; }
        var regionSel = document.querySelector('[data-checkout-region]');
        var region = regionSel ? regionSel.value : 'Región Metropolitana';
        var ship = NANAI.shipping[region] || 3990;
        var order = {
          number: 'NN-' + Math.floor(100000 + Math.random() * 900000),
          items: state, subtotal: subtotal(), ship: ship, total: subtotal() + ship,
          region: region, date: new Date().toLocaleDateString('es-CL')
        };
        localStorage.setItem(ORDER_KEY, JSON.stringify(order));
        clear();
        window.location.href = 'confirmacion.html';
      });
    }
    renderAll();
  });

  /* ---------- API pública ---------- */
  NANAI.cart = {
    add: add, remove: remove, setQty: setQty, clear: clear,
    items: function () { return state; }, count: count, subtotal: subtotal
  };
})();
