//When a Global function is called THIS is equal to Window. In 'Strict Mode' it's equal to UNDEFINED
'use strict';

function quienSoy() {
    console.log(`Hola, soy: ${this}`);
}
quienSoy();

//Also happens with functions inside an Object's Method when called inside
const oscar = {
    name: 'Oscar',
    twitter: '@oscarvedo',
    saludar: function() {
        function siguemeEnTwitter() {
            console.log(`Sígueme en Twitter: ${this.twitter}`);
        }

        console.log(`Hola, me llamo ${this.name}`); //Error in Strict
        siguemeEnTwitter();
    }
}
oscar.saludar();