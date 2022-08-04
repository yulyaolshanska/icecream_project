'use strict';
// Это комментарий. Дальше идет весь код JS-файла
(() => {
  const mobileMenu = document.querySelector('.mobile-menu--js');
  const openMenuBtn = document.querySelector('.mobile-menu__open--js');
  const closeMenuBtn = document.querySelector('.mobile-menu__close--js');
  const headerBackdrop = document.querySelector('.header__backdrop');

  const openMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.add('mobile-menu--is-open');
    openMenuBtn.classList.add('--is-open');
    document.body.classList.add('menu--is-open');
    headerBackdrop.classList.remove('visually-hidden');
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', openMenu);

  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--is-open');
    document.body.classList.remove('menu--is-open');
    headerBackdrop.classList.add('visually-hidden');
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || ' ') {
      openMenuBtn.setAttribute('aria-expanded', false);
      closeMenu();
    }
  });

  window.addEventListener('click', e => {
    const target = e.target;
    if (
      !target.closest('.mobile-menu') &&
      !target.closest('.button__buy') &&
      !target.closest('.mobile-menu__switch')
    ) {
      closeMenu();
    }
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    openMenuBtn.setAttribute('aria-expanded', false);

    closeMenu();
  });
})();
