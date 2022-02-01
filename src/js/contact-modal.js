(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contact-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

document.addEventListener('touchstart', onTouchStart, {passive: true});

  function toggleModal() {
    document.body.classList.toggle('contact-modal-open');
    refs.contactModal.classList.toggle('visually-hidden');
  }
})();