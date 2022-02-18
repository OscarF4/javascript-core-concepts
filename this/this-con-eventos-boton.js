'use strict';

const oscar = {
    name: 'Oscar',
    saludar: function () {
        console.log(`Hola, me llamo ${this.name}!`);
        console.log(this);
    }
}

const button = document.getElementById('clickButton');
button.addEventListener('click', oscar.saludar); //This es el elemento 'Button'