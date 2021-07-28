'use strict';
/**
    *** Select the elements ***  
 */

const className = {
    modal:'.modal',
    overlay: '.overlay',
    btnCloseModal: '.close-modal',
    btnsOpenModal: '.show-moda'
}

const elements = {
    modal: document.querySelector(className.modal),
    overlay: document.querySelector(className.overlay),
    btnCloseModal: document.querySelector(className.btnCloseModal),
    btnsOpenModal: document.querySelectorAll(className.btnsOpenModal)
}