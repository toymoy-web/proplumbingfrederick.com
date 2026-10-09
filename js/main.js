(function () {
  var BREAKPOINT = 768;

  var toggle = document.getElementById('mob-toggle');
  var drawer = document.getElementById('mob-drawer');
  var overlay = document.getElementById('mob-overlay');
  var closeBtn = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.removeAttribute('hidden');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.setAttribute('hidden', '');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    document.documentElement.style.overflow = '';
  }

  if (toggle && drawer && overlay) {
    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
    if (closeBtn) { closeBtn.addEventListener('click', closeDrawer); }
    overlay.addEventListener('click', closeDrawer);
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDrawer(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > BREAKPOINT && toggle.getAttribute('aria-expanded') === 'true') {
        closeDrawer();
      }
    });
  }

  // FAQ accordion: max-height toggle via class, never display:none
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) { return; }
    btn.addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
})();
