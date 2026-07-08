// NANAI NANAI — Brand Hub · script.js
// Vanilla ES2022 · Zero dependencies · No module type needed

// ─── Datos de la paleta de colores ───────────────────────
var PALETTE = [
  {
    name: 'Blush',     alias: 'Rosa Suave',
    hex: '#F2D5D0',    rgb: '242 · 213 · 208',
    cmyk: '0 · 12 · 14 · 5',   pms: '698 C',
    territory: 'Contención',
  },
  {
    name: 'Lavande',   alias: 'Lavanda',
    hex: '#D4CCE8',    rgb: '212 · 204 · 232',
    cmyk: '9 · 12 · 0 · 9',    pms: '2635 C',
    territory: 'Reserva',
  },
  {
    name: 'Crème', alias: 'Beige',
    hex: '#F5EDE3',    rgb: '245 · 237 · 227',
    cmyk: '0 · 3 · 7 · 4',     pms: '9183 C',
    territory: 'Reserva',
  },
  {
    name: 'Or',        alias: 'Dorado',
    hex: '#C9A96E',    rgb: '201 · 169 · 110',
    cmyk: '0 · 16 · 45 · 21',  pms: '7509 C',
    territory: 'Memoria',
  },
  {
    name: 'Ciel',      alias: 'Celeste Claro',
    hex: '#C8DDE8',    rgb: '200 · 221 · 232',
    cmyk: '14 · 5 · 0 · 9',    pms: '278 C',
    territory: 'Reserva',
  },
  {
    name: 'Sauge',     alias: 'Verde Salvia',
    hex: '#B5C9B2',    rgb: '181 · 201 · 178',
    cmyk: '10 · 0 · 11 · 21',  pms: '557 C',
    territory: 'Renacer',
  },
  {
    name: 'Noyau',     alias: 'Taupe',
    hex: '#9B7E6B',    rgb: '155 · 126 · 107',
    cmyk: '0 · 19 · 31 · 39',  pms: '7530 C',
    territory: 'Base',
  },
  {
    name: 'Umbra',     alias: 'Oscuro',
    hex: '#2C2320',    rgb: '44 · 35 · 32',
    cmyk: '0 · 20 · 27 · 83',  pms: 'Black 7 C',
    territory: 'Base',
  },
];

// ─── Navegación lateral ───────────────────────────────────
function SideNav() {
  this.sidebar  = document.querySelector('.sidebar');
  this.overlay  = document.querySelector('.sidebar-overlay');
  this.toggle   = document.querySelector('.nav-toggle');
  this.navLinks = document.querySelectorAll('.nav-link');
  this.sections = document.querySelectorAll('.section');

  var self = this;

  // Nav link clicks
  this.navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Enlaces externos (Design System, Ecommerce) no tienen data-section:
      // dejar que el navegador siga el href sin tocar las secciones del SPA.
      if (!link.dataset.section) return;
      self.navigate(link.dataset.section);
      self.closeMobile();
    });
  });

  // Mobile toggle
  if (this.toggle) {
    this.toggle.addEventListener('click', function() {
      self.toggleMobile();
    });
  }

  // Overlay click closes nav
  if (this.overlay) {
    this.overlay.addEventListener('click', function() {
      self.closeMobile();
    });
  }

  // Escape key closes mobile nav
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') self.closeMobile();
  });

  // Handle browser back/forward
  window.addEventListener('hashchange', function() {
    self.activateFromHash();
  });

  // Activate initial section
  this.activateFromHash();
}

SideNav.prototype.activateFromHash = function() {
  var hash = location.hash.replace('#', '') || 'overview';
  this.navigate(hash);
};

SideNav.prototype.navigate = function(sectionId) {
  var self = this;

  // Show target section, hide others
  this.sections.forEach(function(section) {
    if (section.dataset.section === sectionId) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Update nav link active state
  this.navLinks.forEach(function(link) {
    if (link.dataset.section === sectionId) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.setAttribute('aria-current', 'false');
    }
  });

  // Update URL hash without triggering hashchange
  if (location.hash !== '#' + sectionId) {
    history.pushState(null, '', '#' + sectionId);
  }

  // Scroll content area to top
  var content = document.querySelector('.main-content');
  if (content) content.scrollTop = 0;
};

SideNav.prototype.toggleMobile = function() {
  var isOpen = this.sidebar.classList.toggle('open');
  if (this.overlay) this.overlay.classList.toggle('visible', isOpen);
  if (this.toggle)  this.toggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

SideNav.prototype.closeMobile = function() {
  this.sidebar.classList.remove('open');
  if (this.overlay) this.overlay.classList.remove('visible');
  if (this.toggle)  this.toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

// ─── Color Swatches ───────────────────────────────────────
function ColorSwatches(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var fragment = document.createDocumentFragment();

  PALETTE.forEach(function(color) {
    var luminance = colorLuminance(color.hex);
    var isDark = luminance < 0.5;
    var btnBg    = isDark ? 'rgba(44,42,39,0.75)' : 'rgba(255,255,255,0.85)';
    var btnColor = isDark ? '#FAF8F5' : '#2C2320';

    var card = document.createElement('article');
    card.className = 'swatch-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', color.name + ': ' + color.alias);

    card.innerHTML =
      '<div class="swatch-color" style="background-color:' + color.hex + '">' +
        '<button class="swatch-copy-btn" data-copy="' + color.hex + '" ' +
          'aria-label="Copiar ' + color.hex + '" ' +
          'style="color:' + btnColor + ';background:' + btnBg + ';border:none;border-radius:6px;padding:4px 8px;font-family:inherit;font-size:11px;font-weight:600;cursor:pointer;letter-spacing:0.04em;">' +
          'Copiar HEX' +
        '</button>' +
      '</div>' +
      '<div class="swatch-info">' +
        '<div class="swatch-name-row">' +
          '<p class="swatch-name">' + color.name + '</p>' +
          '<span class="swatch-territory-badge" data-territory="' + color.territory + '">' + color.territory + '</span>' +
        '</div>' +
        '<p class="swatch-alias">' + color.alias + '</p>' +
        '<div class="swatch-values">' +
          '<div class="swatch-value-row"><span class="swatch-value-label">HEX</span><span class="swatch-value-data">' + color.hex + '</span></div>' +
          '<div class="swatch-value-row"><span class="swatch-value-label">RGB</span><span class="swatch-value-data">' + color.rgb + '</span></div>' +
          '<div class="swatch-value-row"><span class="swatch-value-label">CMYK</span><span class="swatch-value-data">' + color.cmyk + '</span></div>' +
          '<div class="swatch-value-row"><span class="swatch-value-label">PMS</span><span class="swatch-value-data">' + color.pms + '</span></div>' +
        '</div>' +
      '</div>';

    card.querySelector('.swatch-copy-btn').addEventListener('click', function() {
      copyToClipboard(color.hex);
    });

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function colorLuminance(hex) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

// ─── Clipboard ────────────────────────────────────────────
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      showToast(text + ' copiado');
    }).catch(function() {
      showToast('No se pudo copiar');
    });
  } else {
    // Fallback for older browsers / file://
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(text + ' copiado');
    } catch(e) {
      showToast('No se pudo copiar');
    }
    document.body.removeChild(ta);
  }
}

// ─── Toast ────────────────────────────────────────────────
var toastEl   = null;
var toastTimer = null;

function showToast(message) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.setAttribute('role', 'status');
    toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastEl);
  }

  toastEl.textContent = message;
  clearTimeout(toastTimer);
  toastEl.classList.add('visible');
  toastTimer = setTimeout(function() {
    toastEl.classList.remove('visible');
  }, 2200);
}

// ─── Territory cards → navigate ───────────────────────────
function bindTerritoryCards(nav) {
  document.querySelectorAll('.territory-card[data-territory]').forEach(function(card) {
    card.addEventListener('click', function() {
      nav.navigate(card.dataset.territory);
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nav.navigate(card.dataset.territory);
      }
    });
  });
}

// ─── In-content section links (hero CTAs, demo buttons) ───
function bindSectionLinks(nav) {
  document.querySelectorAll('[data-section]:not(.nav-link)').forEach(function(el) {
    if (el.classList.contains('section')) return; // skip <section> panels
    el.addEventListener('click', function() {
      nav.navigate(el.dataset.section);
    });
    if (el.tagName !== 'BUTTON' && el.tagName !== 'A') {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          nav.navigate(el.dataset.section);
        }
      });
    }
  });
}

// ─── Logo Studio · descargas por versión / fondo / bajada ──
function bindLogoStudio(rootId) {
  var root = document.getElementById(rootId);
  if (!root) return;

  var cards = root.querySelectorAll('.logo-studio-card');

  function refresh(card) {
    var base  = card.dataset.base;                 // Logomark | stacked | landscape | logo
    var label = card.dataset.label;                // slug para el nombre de descarga
    var mode  = card.dataset.mode || 'color';      // color | gray | inverse | white
    var tl    = card.dataset.tl === '1' && card.dataset.hasTl === '1';

    // El wordmark y square usan sufijo "_color"; el resto no lleva sufijo en modo color
    var colorSuffix = (mode === 'color') ? (card.dataset.colorSuffix || '') : '_' + mode;
    var dark = (mode === 'inverse' || mode === 'white' || mode === 'color-dark');

    var name = base + (tl ? '-tl' : '') + colorSuffix;
    var dlSlug = label + (tl ? '-con-bajada' : '') + '-' + mode;

    // Square entrega PNG sin sufijo @2x; el resto usa "_2x"
    var pngSuffix = (card.dataset.pngSuffix !== undefined) ? card.dataset.pngSuffix : '_2x';
    var svg = 'images/logo/' + name + '.svg';
    var png = 'images/logo/' + name + pngSuffix + '.png';

    var img = card.querySelector('[data-preview]');
    if (img) img.src = png;

    var stage = card.querySelector('[data-stage]');
    if (stage) stage.setAttribute('data-bg', dark ? 'dark' : 'light');

    var aSvg = card.querySelector('[data-dl="svg"]');
    var aPng = card.querySelector('[data-dl="png"]');
    if (aSvg) { aSvg.href = svg; aSvg.setAttribute('download', 'nanai-nanai-' + dlSlug + '.svg'); }
    if (aPng) { aPng.href = png; aPng.setAttribute('download', 'nanai-nanai-' + dlSlug + '.png'); }
  }

  cards.forEach(function (card) {
    card.querySelectorAll('.seg-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.parentElement;
        if ('setMode' in btn.dataset) card.dataset.mode = btn.dataset.setMode;
        if ('setTl'   in btn.dataset) card.dataset.tl   = btn.dataset.setTl;

        group.querySelectorAll('.seg-opt').forEach(function (o) {
          var active = o === btn;
          o.classList.toggle('is-active', active);
          o.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        refresh(card);
      });
    });
    refresh(card);
  });
}

// ─── Logo · versión principal · toggle claro/oscuro ───────
function bindLogoHero(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  var wrap = grid.closest('.logo-hero') || grid.parentElement;
  var btns = wrap.querySelectorAll('[data-hero-theme]');

  function apply(theme) {
    var dark = theme === 'dark';
    grid.setAttribute('data-theme', theme);
    grid.querySelectorAll('[data-hero-img]').forEach(function (img) {
      img.src = 'images/logo/' + img.getAttribute('data-name') + (dark ? '_inverse' : '') + '_2x.png';
    });
    grid.querySelectorAll('[data-hero-stage]').forEach(function (s) {
      s.setAttribute('data-bg', dark ? 'dark' : 'light');
    });
    btns.forEach(function (b) {
      var active = b.getAttribute('data-hero-theme') === theme;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-hero-theme')); });
  });
  apply('light');
}

// ─── Init (script is at bottom of body — DOM is ready) ────
var nav = new SideNav();
new ColorSwatches('swatches-container');
bindTerritoryCards(nav);
bindSectionLinks(nav);
bindLogoStudio('logoStudio');
bindLogoHero('logoHero');
