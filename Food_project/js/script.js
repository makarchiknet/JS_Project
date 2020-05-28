import tabs from './modules/tabs';
import timer from './modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2020-06-30');
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    cards();
    calc();
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prewArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    });

});


