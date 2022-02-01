(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contact-modal-open]'),
    openModaBtn: document.querySelector('[data-contact-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
    // openModalBuy: document.querySelector('.modal-buy--open'),
    // closeModalBuy: document.querySelector('.modal-buy--close'),
    // modalBuy: document.querySelector('.modal-buy__offer'),
    
   

  };

  refs.openModalBtn.addEventListener('click', toggleModal);



  refs.closeModalBtn.addEventListener('click', toggleModaFr);
  refs.openModaBtn.addEventListener('click', toggleModal);


// document.addEventListener('touchstart', onTouchStart, {passive: true});

  function toggleModal() {
    document.body.classList.toggle('contact-modal-open');
    
    refs.contactModal.classList.toggle('visually-hidden');

    // refs.modalBuy.classList.toggle('visually-hidden');
    
  }

  function toggleModaFr() {
    document.body.classList.toggle('contact-modal-open');
    refs.contactModal.classList.toggle('visually-hidden');
    let paragraph = document.querySelector('.js-contact-modal__title');
    paragraph.textContent = 'Franchise!';    
  }
  
})();