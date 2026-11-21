/*!
 * avl-nav.js — Barra de navegación flotante compartida
 * AVV Lab · video, illustrator, resolume, after-effects, iluminacion, magicq
 *
 * Uso en cada suite:
 *   <script>
 *   window.AVL_NAV_CONFIG = {
 *     label: 'Nombre de la suite',
 *     sub:   'Subtítulo / herramienta',
 *     prev:  { href: 'anterior.html', title: 'Tooltip anterior' },
 *     next:  { href: 'siguiente.html', title: 'Tooltip siguiente' }, // null = deshabilitado
 *     dot:   0,      // índice del punto activo (0-based)
 *     dots:  6,      // total de puntos
 *     accent: '#4A7A6A'  // color de fondo del botón home
 *   };
 *   </script>
 *   <script src="avl-nav.js"></script>
 */

(function () {
  'use strict';

  /* ─── Inject CSS ─────────────────────────────────────────────────────────── */
  if (!document.getElementById('avl-nav-style')) {
    var s = document.createElement('style');
    s.id  = 'avl-nav-style';
    s.textContent = '#avl-nav {\n    position: fixed;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 999999;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    background: rgba(30,29,27,0.92);\n    backdrop-filter: blur(14px);\n    -webkit-backdrop-filter: blur(14px);\n    border: 1px solid rgba(255,255,255,0.10);\n    border-radius: 40px;\n    padding: 7px 10px;\n    box-shadow: 0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18);\n    font-family: \'Poppins\', -apple-system, sans-serif;\n    white-space: nowrap;\n    user-select: none;\n  }\n  .avl-nav-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: none;\n    background: rgba(255,255,255,0.08);\n    color: rgba(255,255,255,0.75);\n    cursor: pointer;\n    text-decoration: none;\n    transition: background .16s cubic-bezier(.23,1,.32,1), color .16s cubic-bezier(.23,1,.32,1), transform .16s cubic-bezier(.23,1,.32,1);\n    flex-shrink: 0;\n    font-size: 13px;\n    line-height: 1;\n  }\n  @media (hover: hover) and (pointer: fine) {\n    .avl-nav-btn:hover { background: rgba(255,255,255,0.18); color: #fff; transform: scale(1.06); }\n  }\n  .avl-nav-btn:active { transform: scale(0.92); transition-duration: 100ms; }\n  .avl-nav-btn.avl-nav-home {\n    background: #A06B4A;\n    opacity: .9;\n  }\n  .avl-nav-btn.avl-nav-home:hover {\n    opacity: 1;\n    background: #A06B4A;\n  }\n  .avl-nav-divider {\n    width: 1px;\n    height: 20px;\n    background: rgba(255,255,255,0.12);\n    flex-shrink: 0;\n  }\n  .avl-nav-info {\n    padding: 0 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1px;\n    min-width: 130px;\n    text-align: center;\n  }\n  .avl-nav-label {\n    font-size: 11px;\n    font-weight: 600;\n    color: #fff;\n    letter-spacing: -.1px;\n  }\n  .avl-nav-app {\n    font-size: 9px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.68);\n    letter-spacing: .5px;\n    text-transform: uppercase;\n  }\n  .avl-nav-dots {\n    display: flex;\n    gap: 4px;\n    align-items: center;\n    padding: 0 4px;\n  }\n  .avl-nav-dot {\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.2);\n    transition: background .2s, transform .2s;\n    cursor: default;\n  }\n  .avl-nav-dot.avl-active {\n    background: #A06B4A;\n    transform: scale(1.3);\n  }\n  .avl-nav-btn svg {\n    width: 14px;\n    height: 14px;\n    flex-shrink: 0;\n  }\n  @media (max-width: 480px) {\n    #avl-nav { bottom: 12px; padding: 6px 8px; gap: 4px; }\n    .avl-nav-info { min-width: 100px; }\n    .avl-nav-label { font-size: 10px; }\n    .avl-nav-dots { display: none; }\n  }\n\n\n/* ── UNIFIED BOX SIZING — Illustrator (reference) ──────────── */\n.info-box, .warn-box, .ok-box {\n  border-radius: 4px !important;\n  padding: 14px 16px !important;\n  margin-bottom: 14px !important;\n  border-left-width: 3px !important;\n}\n.info-box h4, .warn-box h4, .ok-box h4 {\n  font-size: 13px !important;\n  letter-spacing: .8px !important;\n  margin-bottom: 8px !important;\n}\n\n/* ═══ RESPONSIVE ADDITIONS — ILLUSTRATOR ════════════════════════════ */\n@media (max-width: 1280px) {\n  .content-area .main { padding: 24px 28px 80px; }\n}\n@media (max-width: 1024px) {\n  .content-area .main { padding: 20px 20px 80px; }\n  .grid-3, .grid-4 { grid-template-columns: 1fr 1fr; }\n  .page-title { font-size: 26px; }\n}\n@media (max-width: 640px) {\n  .content-area .main, .main { padding: 16px 14px 80px !important; }\n  .page-title  { font-size: 20px; }\n  .page-desc   { font-size: 14px !important; }\n  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }\n  .info-box p, .warn-box p, .ok-box p { font-size: 14px; }\n  .ai-table    { font-size: 12px; }\n  .step-item   { gap: 10px; }\n  .top-bar     { padding-top: 6px; padding-bottom: 6px; padding-right: 14px; }\n  .header-badge { display: none; }\n}\n\n\n/* ── Back button ── */\n.avl-nav-btn.avl-nav-back {\n  background: rgba(255,255,255,0.08);\n  position: relative;\n}\n.avl-nav-btn.avl-nav-back:hover {\n  background: rgba(255,255,255,0.18);\n}\n.avl-nav-btn.avl-nav-back[data-hidden="true"] {\n  opacity: .2;\n  pointer-events: none;\n  cursor: default;\n}';
    s.textContent += '\n/* ── Accesibilidad común (avl-nav.js) ── */\n.avl-sr{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\n.avl-skip{position:fixed;left:12px;top:-60px;z-index:1000000;background:#201e1b;color:#f6f1e4;font:700 14px system-ui,sans-serif;padding:10px 16px;border-radius:10px;border:2px solid #f2da8e;text-decoration:none;transition:top .15s}\n.avl-skip:focus{top:12px}\n:is(a,button,input,select,textarea,summary,[tabindex]):focus-visible{outline:3px solid #f2da8e!important;outline-offset:2px!important;box-shadow:0 0 0 5px #201e1b!important}\n#avl-nav .avl-nav-btn:focus-visible{outline-offset:1px!important}\n[data-avl-kb]{cursor:pointer}\n@media (max-width: 768px){body:has(.mobile-btn) .top-bar{padding-left:64px!important}}';
    document.head.appendChild(s);
  }

  /* ─── Config ─────────────────────────────────────────────────────────────── */
  var cfg       = window.AVL_NAV_CONFIG || {};
  var label     = cfg.label  || 'AVV Lab';
  var sub       = cfg.sub    || '';
  var prev      = cfg.prev   || null;
  var next      = cfg.next   || null;
  var dotIndex  = cfg.dot    !== undefined ? cfg.dot : 0;
  var totalDots = cfg.dots   || 6;
  var accent    = cfg.accent || '#4A7A6A';

  /* ─── SVG icons ──────────────────────────────────────────────────────────── */
  var SVG_HOME = '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none"><path d="M2 8L8 2l6 6" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6v7h3v-3h2v3h3V6" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_BACK = '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none"><path d="M13 5 L8 5 C6 5 4 7 4 9 L4 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10 L4 12 L6 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_PREV = '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_NEXT = '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ─── Dots ───────────────────────────────────────────────────────────────── */
  var dotsHTML = '';
  for (var i = 0; i < totalDots; i++) {
    dotsHTML += '<div class="avl-nav-dot' + (i === dotIndex ? ' avl-active' : '') + '"></div>';
  }

  /* ─── Nav HTML ───────────────────────────────────────────────────────────── */
  var html = '<nav id="avl-nav" aria-label="Navegación entre suites de AVV Lab">';
  html += '<a class="avl-nav-btn avl-nav-home" href="index.html" title="Volver al índice" aria-label="Volver al índice de AVV Lab">' + SVG_HOME + '</a>';
  html += '<button class="avl-nav-btn avl-nav-back" id="avl-back-btn" onclick="avlGoBack()" title="Volver a la última suite" aria-label="Volver a la última suite" data-hidden="true" disabled>' + SVG_BACK + '</button>';
  html += '<div class="avl-nav-divider"></div>';

  if (prev) {
    html += '<a class="avl-nav-btn" href="' + prev.href + '" title="' + prev.title + '" aria-label="Suite anterior: ' + prev.title + '">' + SVG_PREV + '</a>';
  } else {
    html += '<button class="avl-nav-btn" disabled aria-label="No hay suite anterior" style="opacity:.25;cursor:default">' + SVG_PREV + '</button>';
  }

  html += '<div class="avl-nav-info">';
  html += '<div class="avl-nav-label">'  + label + '</div>';
  html += '<div class="avl-nav-app">'    + sub   + '</div>';
  html += '</div>';
  html += '<div class="avl-nav-dots" aria-hidden="true">' + dotsHTML + '</div>';

  if (next) {
    html += '<a class="avl-nav-btn" href="' + next.href + '" title="' + next.title + '" aria-label="Suite siguiente: ' + next.title + '">' + SVG_NEXT + '</a>';
  } else {
    html += '<button class="avl-nav-btn" disabled aria-label="No hay suite siguiente" style="opacity:.25;cursor:default">' + SVG_NEXT + '</button>';
  }
  html += '</nav>';

  /* ─── Mount ──────────────────────────────────────────────────────────────── */
  var container = document.createElement('div');
  container.innerHTML = html;
  var navEl = container.firstChild;
  document.body.appendChild(navEl);

  /* Apply accent color to home button */
  var homeBtn = navEl.querySelector('.avl-nav-home');
  if (homeBtn && accent) {
    homeBtn.style.background = accent;
  }

  /* ─── History & back-button logic ────────────────────────────────────────── */
  var PAGES = {
    'video.html':        'Imagen y vídeo',
    'illustrator.html':  'Illustrator',
    'resolume.html':     'Resolume',
    'after-effects.html':'After Effects',
    'iluminacion.html':  'Iluminación',
    'magicq.html':       'MagicQ',
    'index.html':        'Inicio'
  };

  var current = location.pathname.split('/').pop() || 'index.html';
  var hist    = JSON.parse(sessionStorage.getItem('avv-history') || '[]');
  if (hist[hist.length - 1] !== current) {
    hist.push(current);
    if (hist.length > 20) hist.shift();
    sessionStorage.setItem('avv-history', JSON.stringify(hist));
  }

  function updateBackBtn() {
    var btn  = document.getElementById('avl-back-btn');
    if (!btn) return;
    var last = null;
    for (var i = hist.length - 2; i >= 0; i--) {
      if (hist[i] !== current) { last = hist[i]; break; }
    }
    if (last) {
      btn.setAttribute('data-hidden', 'false');
      btn.disabled = false;
      btn.title = 'Volver a ' + (PAGES[last] || last);
      btn.setAttribute('aria-label', btn.title);
      btn.setAttribute('data-href', last);
    } else {
      btn.setAttribute('data-hidden', 'true');
      btn.disabled = true;
      btn.title = '';
      btn.setAttribute('aria-label', 'Volver a la última suite (no disponible)');
    }
  }

  window.avlGoBack = function () {
    var btn = document.getElementById('avl-back-btn');
    if (!btn || btn.getAttribute('data-hidden') === 'true') return;
    var href = btn.getAttribute('data-href');
    if (href) window.location.href = href;
  };

  /* ─── Capa de accesibilidad común ─────────────────────────────────────────
     Las suites usan muchos <div onclick> y pestañas sin foco. Aquí se hacen
     operables con teclado (Tab + Enter/Espacio), sin tocar su lógica. */
  var KB_SEL = '[onclick],[data-inner],[data-module],.nav-tab,.inner-tab,.nav-item,.section-card,.con-conn,.con-target,.tlo-layer';
  var NATIVE = /^(A|BUTTON|INPUT|SELECT|TEXTAREA|LABEL|SUMMARY|OPTION|BODY|HTML|svg|path|circle|rect|g|line|polygon|polyline|text|CANVAS|VIDEO|AUDIO|IFRAME|FORM|DETAILS|SCRIPT)$/;
  function nameOf(el) {
    var t = (el.getAttribute('aria-label') || el.title || el.textContent || '').replace(/\s+/g, ' ').trim();
    return t.slice(0, 90);
  }
  function enhance(root) {
    var els = (root.querySelectorAll ? root.querySelectorAll(KB_SEL) : []);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.hasAttribute('data-avl-kb') || NATIVE.test(el.tagName) || el.closest('#avl-nav')) continue;
      if (el.closest('a,button') && el.closest('a,button') !== el) continue;
      if (el.querySelector('a[href],button,input,select,textarea')) continue; /* contenedores con controles propios */
      el.setAttribute('data-avl-kb', '');
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
      if (!el.hasAttribute('aria-label') && !nameOf(el)) el.setAttribute('aria-label', 'Activar');
    }
    /* Controles de formulario sin nombre accesible: se toma el texto visible más cercano */
    var ctr = document.querySelectorAll('input:not([type=hidden]):not([aria-label]):not([aria-labelledby]),select:not([aria-label]):not([aria-labelledby]),textarea:not([aria-label]):not([aria-labelledby])');
    for (var c = 0; c < ctr.length; c++) {
      var f = ctr[c];
      if (f.closest('label') || (f.id && document.querySelector('label[for="' + f.id + '"]'))) continue;
      var txt = '';
      var prevEl = f.previousElementSibling;
      if (prevEl && !/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(prevEl.tagName)) txt = prevEl.textContent;
      if (!txt.trim() && f.parentElement) {
        var pp = f.parentElement.previousElementSibling;
        var own = f.parentElement.firstElementChild;
        if (own && own !== f && !/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(own.tagName)) txt = own.textContent;
        else if (pp) txt = pp.textContent;
      }
      txt = (txt || '').replace(/\s+/g, ' ').trim();
      if (!txt || txt.length > 60) txt = f.getAttribute('title') || f.getAttribute('placeholder') || (f.id ? f.id.replace(/[_-]+/g, ' ') : '') || 'Campo';
      f.setAttribute('aria-label', txt.slice(0, 60));
    }
    /* Botones solo con icono */
    var bts = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    for (var bb = 0; bb < bts.length; bb++) {
      if (!bts[bb].textContent.trim()) bts[bb].setAttribute('aria-label', bts[bb].title || 'Botón');
    }
    /* Cabeceras de tabla vacías */
    var ths = document.querySelectorAll('th');
    for (var tt = 0; tt < ths.length; tt++) {
      if (!ths[tt].textContent.trim() && !ths[tt].querySelector('[aria-label]')) { var sp = document.createElement('span'); sp.className = 'avl-sr'; sp.textContent = 'Acciones'; ths[tt].appendChild(sp); }
    }
    /* Zonas con scroll propio: alcanzables con teclado */
    var all = document.querySelectorAll('div,ul,ol,section,aside,nav,pre,table');
    for (var q = 0; q < all.length; q++) {
      var z = all[q];
      if (z.id === 'avl-nav' || z.hasAttribute('tabindex') || !z.offsetParent) continue;
      if (z.scrollHeight - z.clientHeight < 6 && z.scrollWidth - z.clientWidth < 6) continue;
      var ov = getComputedStyle(z);
      if (!/(auto|scroll)/.test(ov.overflowY + ov.overflowX)) continue;
      if (z.querySelector('a[href],button,input,select,textarea,[tabindex]')) continue;
      z.setAttribute('tabindex', '0');
      if (!z.getAttribute('role')) z.setAttribute('role', 'region');
      if (!z.getAttribute('aria-label')) z.setAttribute('aria-label', 'Zona con desplazamiento');
    }
    var sc = document.querySelectorAll('#sidebar,#sb,#navBar,.nav-bar,nav');
    for (var j = 0; j < sc.length; j++) {
      var n = sc[j];
      if (n.id === 'avl-nav' || n.hasAttribute('tabindex')) continue;
      if (n.scrollHeight > n.clientHeight + 4 || n.scrollWidth > n.clientWidth + 4) {
        if (!n.querySelector('a[href],button,[tabindex]')) { n.setAttribute('tabindex', '0'); if (!n.getAttribute('aria-label')) n.setAttribute('aria-label', 'Menú de la suite'); }
      }
    }
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    var el = e.target;
    if (!el || !el.hasAttribute || !el.hasAttribute('data-avl-kb')) return;
    e.preventDefault();
    el.click();
  });
  function a11yInit() {
    updateBackBtn();
    var main = document.querySelector('main') || document.querySelector('.content-area,.main,#main,.content');
    if (main && !main.id) main.id = 'avl-main';
    if (main && main.tagName !== 'MAIN' && !document.querySelector('[role="main"]')) main.setAttribute('role', 'main');
    if (main && !document.querySelector('.skip-link,.skip,.avl-skip')) {
      var sk = document.createElement('a');
      sk.className = 'avl-skip'; sk.href = '#' + main.id; sk.textContent = 'Saltar al contenido';
      document.body.insertBefore(sk, document.body.firstChild);
    }
    var h1s = [].filter.call(document.querySelectorAll('h1'), function (x) { return !x.closest('.page,[id^="page-"]'); });
    if (!h1s.length) {
      var h = document.createElement('h1');
      h.className = 'avl-sr';
      h.textContent = label + (sub ? ' · ' + sub : '') + ' · AVV Lab';
      (main || document.body).insertBefore(h, (main || document.body).firstChild);
    }
    var imgs = document.querySelectorAll('img:not([alt])');
    for (var k = 0; k < imgs.length; k++) imgs[k].setAttribute('alt', '');
    enhance(document);
    var pend = false;
    new MutationObserver(function () {
      if (pend) return; pend = true;
      setTimeout(function () { pend = false; enhance(document); }, 400);
    }).observe(document.body, { childList: true, subtree: true });
    /* al cambiar de módulo, las zonas recién visibles se revisan otra vez */
    document.addEventListener('click', function () { setTimeout(function () { enhance(document); }, 450); }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', a11yInit);
  } else {
    a11yInit();
  }
})();
