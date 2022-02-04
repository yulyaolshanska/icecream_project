"use strict";
// Это комментарий. Дальше идет весь код JS-файла
(() => {
    const refs = {
     
        
      openModalAboutMenu: document.querySelector('.modal-about-menu--open'),
      closeModalAboutMenu: document.querySelector('.modal-about-menu--close'),
      modalAboutMenu: document.querySelector('.modal-about-menu__offer'),
    
      };
  
  
    
    refs.openModalAboutMenu.addEventListener('click', toggleModal);
    refs.closeModalAboutMenu.addEventListener('click', toggleModal);
  
   
  
    function toggleModal() {
     
      refs.modalAboutMenu.classList.toggle('visually-hidden');
      document.body.classList.toggle('modal-about-menu--visible');
    }
  
  })();