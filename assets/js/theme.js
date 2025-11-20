(function () {
  const body = document.body;
  const themeButtons = document.querySelectorAll('#theme-toggle');
  const themeIcons = document.querySelectorAll('#theme-icon');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  /* -------------------- THEME -------------------- */

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') body.classList.add('dark');
  else if (saved === 'light') body.classList.remove('dark');
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
  }

  function updateIcons() {
    const dark = body.classList.contains('dark');
    themeIcons.forEach(i => i.textContent = dark ? '☀️' : '🌙');
    themeButtons.forEach(b => b.setAttribute('aria-pressed', dark));
  }
  updateIcons();

  themeButtons.forEach(btn =>
    btn.addEventListener('click', () => {
      body.classList.toggle('dark');
      const dark = body.classList.contains('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      updateIcons();
    })
  );

  /* -------------------- MOBILE NAV -------------------- */

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileToggle.setAttribute(
        'aria-expanded',
        mobileNav.classList.contains('active')
      );
    });

    /* Close when clicking a link */
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close on escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------------------- FOOTER YEARS -------------------- */
  const year = new Date().getFullYear();
  document.querySelectorAll('#year').forEach(el => el.textContent = year);

})();