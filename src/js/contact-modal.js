(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contact-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
    // openModalBuy: document.querySelector('.modal-buy--open'),
    // closeModalBuy: document.querySelector('.modal-buy--close'),
    // modalBuy: document.querySelector('.modal-buy__offer'),
    
   

  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  // refs.openModalBuy.addEventListener('click', toggleModal);
  // refs.closeModalBuy.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('contact-modal-open');
    
    refs.contactModal.classList.toggle('visually-hidden');

    // refs.modalBuy.classList.toggle('visually-hidden');
  }
})();