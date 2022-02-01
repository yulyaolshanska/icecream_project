(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contact-modal-open]'),
    openModaBtn: document.querySelector('[data-contact-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModaFr);
  refs.openModaBtn.addEventListener('click', toggleModal);

document.addEventListener('touchstart', onTouchStart, {passive: true});

  function toggleModal() {
    document.body.classList.toggle('contact-modal-open');
    refs.contactModal.classList.toggle('visually-hidden');
  }

  function toggleModaFr() {
    document.body.classList.toggle('contact-modal-open');
    refs.contactModal.classList.toggle('visually-hidden');
    let paragraph = document.querySelector('.contact-modal__title');
    paragraph.textContent = 'Franchise!';    
  }
  
})();