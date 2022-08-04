'use strict';
// Это комментарий. Дальше идет весь код JS-файла
(() => {
  const refs = {
    openModalBuy: document.querySelector('.modal-buy--open'),
    closeModalBuy: document.querySelector('.modal-buy--close'),
    modalBuy: document.querySelector('.modal-buy__offer'),

    openModalBuyMenu: document.querySelector('.modal-buy-menu--open'),
    closeModalBuyMenu: document.querySelector('.modal-buy-menu--close'),
    modalBuyMenu: document.querySelector('.modal-buy-menu__offer'),
  };

  refs.openModalBuy.addEventListener('click', toggleModal);
  refs.closeModalBuy.addEventListener('click', toggleModal);

  refs.openModalBuyMenu.addEventListener('click', toggleModal);
  refs.closeModalBuyMenu.addEventListener('click', toggleModal);

  window.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.modal-buy') && !target.closest('.button__buy')) {
      refs.modalBuyMenu.classList.add('modal-buy__backdrop--hidden');
      document.body.classList.remove('modal-buy-menu--visible');
    }
  });

  function toggleModal() {
    document.body.classList.toggle('modal-buy-menu--visible');
    refs.modalBuyMenu.classList.toggle('modal-buy__backdrop--hidden');
  }
})();
