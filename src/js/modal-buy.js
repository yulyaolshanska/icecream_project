(() => {
  const refs = {
   
    openModalBuy: document.querySelector('.modal-buy--open'),
    closeModalBuy: document.querySelector('.modal-buy--close'),
    modalBuy: document.querySelector('.modal-buy__offer'),
  
    };


  refs.openModalBuy.addEventListener('click', toggleModal);
  refs.closeModalBuy.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('contact-modal--visible');
    refs.modalBuy.classList.toggle('visually-hidden');
  }
})();