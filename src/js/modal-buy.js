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



  function toggleModal() {

    // document.body.classList.toggle('modal-buy--visible');
    // refs.modalBuy.classList.toggle('visually-hidden');

    document.body.classList.toggle('modal-buy-menu--visible');
    refs.modalBuyMenu.classList.toggle('visually-hidden');

  }
})();