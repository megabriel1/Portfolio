'use strict';

const storage=window.localStorage;

const toggle = document.querySelector('.toggle');
const body = document.querySelector('.body');

let oscuro=Boolean(storage.getItem('oscuro'));
let claro=Boolean(storage.getItem('claro'));

const comprobarOscuro=oscuro=>{
    if (oscuro) {
        body.classList.add('change-color');
        toggle.checked=true;        
    } else {
        body.classList.remove('change-color');
        toggle.checked=false;
    }
}
comprobarOscuro(oscuro);

toggle.addEventListener('click', function () {

    if (this.checked) {
        body.classList.add('change-color');
        storage.setItem('oscuro', true);
        storage.removeItem('claro')
    } else {
        body.classList.remove('change-color');
        storage.removeItem('oscuro');
        storage.setItem('claro', true)
    }

})

