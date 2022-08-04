'use strict';
// Это комментарий. Дальше идет весь код JS-файла
(() => {
  const refs = {
    openLocationModalBtn: document.querySelector('[data-contact-locations-modal-open]'),
    openFranchiseModalBtn: document.querySelector('[data-contact-franchise-modal-open]'),
    closeModalBtn: document.querySelector('[data-contact-modal-close]'),
    contactModal: document.querySelector('[data-contact-modal]'),
    ModalFranchiseBtn: document.querySelector('.contact-franchise-modal'),
  };
  console.log('contactModal', refs.contactModal);
  console.log('openLocationModalBtn', refs.openLocationModalBtn);
  console.log('openFranchiseModalBtn', refs.openFranchiseModalBtn);
  console.log('closeModalBtn', refs.closeModalBtn);

  refs.openLocationModalBtn.addEventListener('click', toggleModal);
  refs.openFranchiseModalBtn.addEventListener('click', toggleModaFr);
  refs.ModalFranchiseBtn.addEventListener('click', toggleTitle);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  window.addEventListener('click', e => {
    const target = e.target;
    if (
      !target.closest('contact-modal') &&
      !target.closest('[data-contact-locations-modal-open]') &&
      !target.closest('[data-contact-franchise-modal-open]')
    ) {
      refs.contactModal.classList.add('contact_modal__backdrop--hidden');
      document.body.classList.remove('contact-modal-open');
    }
  });

  function toggleModal() {
    document.body.classList.toggle('contact-modal-open');
    refs.contactModal.classList.toggle('contact_modal__backdrop--hidden');
    let paragraph = document.querySelector('.js-contact-modal__title');
    paragraph.textContent = 'Our Location';
  }

  function toggleModaFr() {
    refs.contactModal.classList.toggle('contact_modal__backdrop--hidden');
    document.body.classList.toggle('contact-modal-open');
    let paragraph = document.querySelector('.js-contact-modal__title');
    paragraph.textContent = 'Franchise!';
  }
})();

function toggleTitle() {
  let paragraph = document.querySelector('.js-contact-modal__title');
  paragraph.textContent = 'Franchise!';
}

// По примеру Макса
// (() => {
//     const refs = {

//       openModalContact: document.querySelector('.data-contact-modal-open'),
//       closeModalContact: document.querySelector('.data-contact-modal-close'),
//       modalContact: document.querySelector('.data-contact-modal'),

//       };

//     refs.openModalContact.addEventListener('click', toggleModal);
//     refs.closeModalContact.addEventListener('click', toggleModal);

//     function toggleModal() {

//       refs.modalContact.classList.toggle('visually-hidden');
//       document.body.classList.toggle('modal-about-menu--visible');
//     }
