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

  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const dropdown = document.getElementById("mobile-dropdown-menu");
  const icon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");

    // Toggle icon between hamburger and X
    if (dropdown.classList.contains("open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});


  /* -------------------- FOOTER YEARS -------------------- */
  const year = new Date().getFullYear();
  document.querySelectorAll('#year').forEach(el => el.textContent = year);

})();