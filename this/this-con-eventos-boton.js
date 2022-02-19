'use strict';

const oscar = {
    name: 'Oscar',
    saludar: function () {
        console.log(`Hola, me llamo ${this.name}!`);
        console.log(this);
    }
}

const button = document.getElementById('clickButton');
button.addEventListener('click', oscar.saludar.bind(oscar)); //This es el objeto Oscar