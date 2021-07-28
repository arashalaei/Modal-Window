'use strict';
/**
    *** Select the elements ***  
 */

const className = {
    modal:'.modal',
    overlay: '.overlay',
    btnCloseModal: '.close-modal',
    btnsOpenModal: '.show-modal'
}

const elements = {
    modal: document.querySelector(className.modal),
    overlay: document.querySelector(className.overlay),
    btnCloseModal: document.querySelector(className.btnCloseModal),
    btnsOpenModal: document.querySelectorAll(className.btnsOpenModal)
}

/**
    *** Controllers ***  
 */

const handlers = {
    openModal: function(){
        elements.modal.classList.remove('hidden');
        elements.overlay.classList.remove('hidden')
    },

    closeModal:function(){
        elements.modal.classList.add('hidden');
        elements.overlay.classList.add('hidden')
    },

    escHandlere:function(e){
        if((e.which === 27|| e.code === 'Escape') && (!elements.modal.classList.contains('hidden')))
                handlers.closeModal()
    }
}

for(let i = 0; i < elements.btnsOpenModal.length; i++)
    elements.btnsOpenModal[i].addEventListener('click', handlers.openModal)

elements.btnCloseModal.addEventListener('click',handlers.closeModal)
elements.overlay.addEventListener('click', handlers.closeModal)
document.addEventListener('keydown', handlers.escHandlere)