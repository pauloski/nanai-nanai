/* ============================================================
   NANAI NANAI · tienda.js
   Interactividad de UI genérica (no-carrito). Vanilla, defensivo.
   El carrito vive en cart.js; la PDP en pdp.js.
   ============================================================ */
(function () {
  'use strict';
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Menú móvil ---------- */
  function initBurger() {
    var burger = $('[data-burger]');
    var links = $('.navbar__links');
    var overlay = $('[data-overlay]');
    if (!burger || !links) return;

    function openMenu() {
      links.classList.add('is-open');
      if (overlay) overlay.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      links.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    // Botón de cierre dentro del panel (como el ✕ del carrito), inyectado por JS
    var closeBtn = document.createElement('button');
    closeBtn.className = 'navbar__close icon-btn';
    closeBtn.setAttribute('aria-label', 'Cerrar menú');
    closeBtn.setAttribute('type', 'button');
    closeBtn.textContent = '✕';
    links.insertBefore(closeBtn, links.firstChild);

    // El navbar es sticky → crea un stacking context que atrapa al panel bajo el
    // overlay. En mobile movemos el panel a <body> (como el drawer del carrito)
    // para que quede por encima del overlay; en desktop lo devolvemos al navbar.
    var anchor = document.createComment('navbar-links-anchor');
    links.parentNode.insertBefore(anchor, links);
    var mq = window.matchMedia('(max-width: 860px)');
    function place() {
      if (mq.matches) {
        if (links.parentNode !== document.body) document.body.appendChild(links);
      } else if (links.parentNode === document.body) {
        anchor.parentNode.insertBefore(links, anchor);
        closeMenu();
      }
    }
    if (mq.addEventListener) mq.addEventListener('change', place); else mq.addListener(place);
    place();

    burger.addEventListener('click', function () {
      if (links.classList.contains('is-open')) closeMenu(); else openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    // Cerrar al tocar un enlace del menú
    links.addEventListener('click', function (e) {
      if (e.target.closest('.navbar__link')) closeMenu();
    });
  }

  /* ---------- Drawer del carrito (abrir / cerrar) ---------- */
  function initDrawer() {
    var drawer = $('[data-drawer]');
    var overlay = $('[data-overlay]');
    if (!drawer) return;
    function open() {
      drawer.classList.add('is-open');
      if (overlay) overlay.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-drawer-open]')) open();
      else if (e.target.closest('[data-drawer-close]')) close();
    });
    if (overlay) overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------- Grilla de productos (data-driven desde data.js) ---------- */
  function initGrids() {
    if (!window.NANAI || !NANAI.renderGrid) return;
    var grid = $('[data-product-grid]');
    if (!grid) return;
    var mini = grid.getAttribute('data-product-grid') === 'mini';
    var n = NANAI.renderGrid('[data-product-grid]', null, mini);
    var countEl = $('[data-plp-count]');
    if (countEl) countEl.textContent = n + (n === 1 ? ' producto' : ' productos');
  }

  /* ---------- Agregar al carro directo desde la tarjeta ---------- */
  function initQuickAdd() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add]');
      if (!btn || !window.NANAI || !NANAI.cart) return;
      var p = NANAI.products[btn.getAttribute('data-add')];
      if (!p) return;
      NANAI.cart.add({
        pid: p.id, name: p.name, image: p.images[0],
        territory: p.territory, tname: NANAI.territories[p.territory],
        base: p.price, qty: 1,
        tarjeton: '', adicionales: [], mensaje: '', firma: ''
      });
      var original = btn.textContent;
      btn.textContent = '✓ Agregado';
      setTimeout(function () { btn.textContent = original; }, 1400);
    });
  }

  /* ---------- Filtros PLP por territorio ---------- */
  function initFilters() {
    var bar = $('[data-filter-bar]');
    if (!bar) return;
    var cards = $$('[data-territory]');
    var countEl = $('[data-plp-count]');
    function apply(value) {
      var visible = 0;
      cards.forEach(function (card) {
        var match = value === 'all' || card.getAttribute('data-territory') === value;
        card.classList.toggle('is-hidden', !match);
        if (match) visible++;
      });
      if (countEl) countEl.textContent = visible + (visible === 1 ? ' producto' : ' productos');
    }
    $$('.filter-chip', bar).forEach(function (chip) {
      chip.addEventListener('click', function () {
        $$('.filter-chip', bar).forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        apply(chip.getAttribute('data-filter'));
      });
    });
  }

  /* ---------- Contadores de caracteres ---------- */
  function initCounters() {
    $$('[data-counter]').forEach(function (ta) {
      var max = parseInt(ta.getAttribute('maxlength') || ta.getAttribute('data-max') || '380', 10);
      var out = $('#' + ta.getAttribute('data-counter'));
      if (!out) return;
      function update() {
        var len = ta.value.length;
        out.textContent = len + ' / ' + max;
        out.classList.toggle('is-limit', len >= max);
      }
      ta.addEventListener('input', update);
      update();
    });
  }

  /* ---------- Acordeón ---------- */
  function initAccordion() {
    $$('.accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        var panel = trigger.nextElementSibling;
        if (panel) panel.setAttribute('data-open', expanded ? 'false' : 'true');
      });
    });
  }

  /* ---------- Stepper de cantidad (solo PDP; el carrito lo maneja cart.js) ---------- */
  function initQty() {
    $$('.qty:not([data-line])').forEach(function (qty) {
      var out = qty.querySelector('output');
      qty.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn || !out) return;
        var val = parseInt(out.textContent, 10) || 1;
        val += btn.getAttribute('data-step') === '-1' ? -1 : 1;
        out.textContent = Math.max(1, val);
      });
    });
  }

  /* ---------- Carrusel del Home (scroll-snap) ---------- */
  function initCarousel() {
    $$('[data-carousel]').forEach(function (car) {
      var track = $('[data-carousel-track]', car);
      var prev = $('[data-carousel-prev]', car);
      var next = $('[data-carousel-next]', car);
      if (!track) return;
      function step() {
        var card = track.querySelector('*');
        return card ? card.getBoundingClientRect().width + 24 : 320;
      }
      function update() {
        if (!prev || !next) return;
        prev.disabled = track.scrollLeft < 8;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      }
      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
      track.addEventListener('scroll', update, { passive: true });
      update();
    });
  }

  /* ---------- Hero slider full-width (Home) ---------- */
  function initHeroSlider() {
    var slider = $('[data-hero-slider]');
    if (!slider) return;
    var track = $('[data-hero-track]', slider);
    var slides = $$('.hero-slide', track);
    var dotsWrap = $('[data-hero-dots]', slider);
    if (slides.length < 2) return;

    var i = 0, timer;
    // Dots
    var dots = slides.map(function (_, k) {
      var d = document.createElement('button');
      d.className = 'hero-dot';
      d.setAttribute('aria-label', 'Ir al slide ' + (k + 1));
      d.addEventListener('click', function () { go(k, true); });
      dotsWrap.appendChild(d);
      return d;
    });

    function go(n, user) {
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-i * 100) + '%)';
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); });
      if (user) restart();
    }
    function next() { go(i + 1); }
    function start() { timer = setInterval(next, 8000); }
    function restart() { clearInterval(timer); start(); }

    var prev = $('[data-hero-prev]', slider), nxt = $('[data-hero-next]', slider);
    if (prev) prev.addEventListener('click', function () { go(i - 1, true); });
    if (nxt) nxt.addEventListener('click', function () { go(i + 1, true); });
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', start);

    go(0);
    start();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initBurger();
    initDrawer();
    initGrids();
    initQuickAdd();
    initFilters();
    initCounters();
    initAccordion();
    initQty();
    initCarousel();
    initHeroSlider();
  });
})();
