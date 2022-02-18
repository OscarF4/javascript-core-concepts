//ENLAZAMIENTO IMPLÍCITO: Se hace cuando invocamos al método de un objeto, en este caso THIS SERÁ EL PRIMER OBJETO A LA IZQUIERDA DEL PUNTO.
'use strict';

const oscar = {
    nombre: 'Oscar',
    saludar : function () {
        console.log(`Hola, me llamo ${this.nombre}`);
    },
    hermano : {
        nombre: 'Jose',
        saludar: function () {
            console.log(`Yo, el hermano, me llamo ${this.nombre}`);
        }
    }
}

oscar.saludar(); //This será 'oscar'
oscar.hermano.saludar(); //This será 'hermano'