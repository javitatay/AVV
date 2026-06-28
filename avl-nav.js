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
    s.textContent = '#avl-nav {\n    position: fixed;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 999999;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    background: rgba(30,29,27,0.92);\n    backdrop-filter: blur(14px);\n    -webkit-backdrop-filter: blur(14px);\n    border: 1px solid rgba(255,255,255,0.10);\n    border-radius: 40px;\n    padding: 7px 10px;\n    box-shadow: 0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18);\n    font-family: \'Poppins\', -apple-system, sans-serif;\n    white-space: nowrap;\n    user-select: none;\n  }\n  .avl-nav-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: none;\n    background: rgba(255,255,255,0.08);\n    color: rgba(255,255,255,0.75);\n    cursor: pointer;\n    text-decoration: none;\n    transition: background .18s, color .18s, transform .18s;\n    flex-shrink: 0;\n    font-size: 13px;\n    line-height: 1;\n  }\n  .avl-nav-btn:hover {\n    background: rgba(255,255,255,0.18);\n    color: #fff;\n    transform: scale(1.08);\n  }\n  .avl-nav-btn.avl-nav-home {\n    background: #A06B4A;\n    opacity: .9;\n  }\n  .avl-nav-btn.avl-nav-home:hover {\n    opacity: 1;\n    background: #A06B4A;\n  }\n  .avl-nav-divider {\n    width: 1px;\n    height: 20px;\n    background: rgba(255,255,255,0.12);\n    flex-shrink: 0;\n  }\n  .avl-nav-info {\n    padding: 0 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1px;\n    min-width: 130px;\n    text-align: center;\n  }\n  .avl-nav-label {\n    font-size: 11px;\n    font-weight: 600;\n    color: #fff;\n    letter-spacing: -.1px;\n  }\n  .avl-nav-app {\n    font-size: 9px;\n    font-weight: 400;\n    color: rgba(255,255,255,0.45);\n    letter-spacing: .5px;\n    text-transform: uppercase;\n  }\n  .avl-nav-dots {\n    display: flex;\n    gap: 4px;\n    align-items: center;\n    padding: 0 4px;\n  }\n  .avl-nav-dot {\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: rgba(255,255,255,0.2);\n    transition: background .2s, transform .2s;\n    cursor: default;\n  }\n  .avl-nav-dot.avl-active {\n    background: #A06B4A;\n    transform: scale(1.3);\n  }\n  .avl-nav-btn svg {\n    width: 14px;\n    height: 14px;\n    flex-shrink: 0;\n  }\n  @media (max-width: 480px) {\n    #avl-nav { bottom: 12px; padding: 6px 8px; gap: 4px; }\n    .avl-nav-info { min-width: 100px; }\n    .avl-nav-label { font-size: 10px; }\n    .avl-nav-dots { display: none; }\n  }\n\n\n/* ── UNIFIED BOX SIZING — Illustrator (reference) ──────────── */\n.info-box, .warn-box, .ok-box {\n  border-radius: 4px !important;\n  padding: 14px 16px !important;\n  margin-bottom: 14px !important;\n  border-left-width: 3px !important;\n}\n.info-box h4, .warn-box h4, .ok-box h4 {\n  font-size: 13px !important;\n  letter-spacing: .8px !important;\n  margin-bottom: 8px !important;\n}\n\n/* ═══ RESPONSIVE ADDITIONS — ILLUSTRATOR ════════════════════════════ */\n@media (max-width: 1280px) {\n  .content-area .main { padding: 24px 28px 80px; }\n}\n@media (max-width: 1024px) {\n  .content-area .main { padding: 20px 20px 80px; }\n  .grid-3, .grid-4 { grid-template-columns: 1fr 1fr; }\n  .page-title { font-size: 26px; }\n}\n@media (max-width: 640px) {\n  .content-area .main, .main { padding: 16px 14px 80px !important; }\n  .page-title  { font-size: 20px; }\n  .page-desc   { font-size: 14px !important; }\n  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }\n  .info-box p, .warn-box p, .ok-box p { font-size: 14px; }\n  .ai-table    { font-size: 12px; }\n  .step-item   { gap: 10px; }\n  .top-bar     { padding: 6px 14px; }\n}\n\n\n/* ── Back button ── */\n.avl-nav-btn.avl-nav-back {\n  background: rgba(255,255,255,0.08);\n  position: relative;\n}\n.avl-nav-btn.avl-nav-back:hover {\n  background: rgba(255,255,255,0.18);\n}\n.avl-nav-btn.avl-nav-back[data-hidden="true"] {\n  opacity: .2;\n  pointer-events: none;\n  cursor: default;\n}';
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
  var SVG_HOME = '<svg viewBox="0 0 16 16" fill="none"><path d="M2 8L8 2l6 6" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6v7h3v-3h2v3h3V6" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_BACK = '<svg viewBox="0 0 16 16" fill="none"><path d="M13 5 L8 5 C6 5 4 7 4 9 L4 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10 L4 12 L6 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_PREV = '<svg viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SVG_NEXT = '<svg viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ─── Dots ───────────────────────────────────────────────────────────────── */
  var dotsHTML = '';
  for (var i = 0; i < totalDots; i++) {
    dotsHTML += '<div class="avl-nav-dot' + (i === dotIndex ? ' avl-active' : '') + '"></div>';
  }

  /* ─── Nav HTML ───────────────────────────────────────────────────────────── */
  var html = '<div id="avl-nav">';
  html += '<a class="avl-nav-btn avl-nav-home" href="index.html" title="Volver al índice">' + SVG_HOME + '</a>';
  html += '<button class="avl-nav-btn avl-nav-back" id="avl-back-btn" onclick="avlGoBack()" title="Volver a la última suite" data-hidden="true">' + SVG_BACK + '</button>';
  html += '<div class="avl-nav-divider"></div>';

  if (prev) {
    html += '<a class="avl-nav-btn" href="' + prev.href + '" title="' + prev.title + '">' + SVG_PREV + '</a>';
  } else {
    html += '<button class="avl-nav-btn" disabled style="opacity:.25;cursor:default">' + SVG_PREV + '</button>';
  }

  html += '<div class="avl-nav-info">';
  html += '<div class="avl-nav-label">'  + label + '</div>';
  html += '<div class="avl-nav-app">'    + sub   + '</div>';
  html += '</div>';
  html += '<div class="avl-nav-dots">' + dotsHTML + '</div>';

  if (next) {
    html += '<a class="avl-nav-btn" href="' + next.href + '" title="' + next.title + '">' + SVG_NEXT + '</a>';
  } else {
    html += '<button class="avl-nav-btn" disabled style="opacity:.25;cursor:default">' + SVG_NEXT + '</button>';
  }
  html += '</div>';

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
    'video.html':        'Imagen & Vídeo',
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
      btn.title = 'Volver a ' + (PAGES[last] || last);
      btn.setAttribute('data-href', last);
    } else {
      btn.setAttribute('data-hidden', 'true');
      btn.title = '';
    }
  }

  window.avlGoBack = function () {
    var btn = document.getElementById('avl-back-btn');
    if (!btn || btn.getAttribute('data-hidden') === 'true') return;
    var href = btn.getAttribute('data-href');
    if (href) window.location.href = href;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBackBtn);
  } else {
    updateBackBtn();
  }
})();
