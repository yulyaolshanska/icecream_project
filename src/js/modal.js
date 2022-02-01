// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//     };
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
//   function toggleModal() {
//     document.body.classList.toggle('mobile-menu--open');
//       refs.modal.classList.toggle('backdrop--is-hidden');
//   };
//        // закрытие мобильного меню на более широких экранах в случае изменения ориентации  устройства
//   // window.matchMedia('(min-width: 600px)').addEventListener('change', e => {
//   window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('mobile-menu--open');
    
   
//   });
// }) ();

(() => {
  const mobileMenu = document.querySelector('.mobile-menu--js');
  const openMenuBtn = document.querySelector('.mobile-menu__open--js');
  const closeMenuBtn = document.querySelector('.mobile-menu__close--js');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('mobile-menu--is-open');
    openMenuBtn.classList.toggle('--is-open')
    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // закрытие мобильного меню на более широких экранах в случае изменения ориентации  устройства
  // window.matchMedia('(min-width: 600px)').addEventListener('change', e => {
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('mobile-menu--is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      // bodyScrollLock.enableBodyScroll(document.body);
    });
  })();