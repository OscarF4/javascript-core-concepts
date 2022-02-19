'use strict';

const oscar = {
    name: 'Oscar',
    twitter: '@oscarvedo',
    saludar: function () {
        const siguemeEnTwitter = () => { //THIS es igual a saludar()
            console.log(`Sígueme en Twitter: ${this.twitter}`);
        }

        console.log(`Hola, me llamo ${this.name}`);
        siguemeEnTwitter();
    }
}

oscar.saludar();



//Classes Trouble
class Persona {
    constructor(name) {
        this.name = name;
    }

    saludar = () => {
        console.log(`Hola, me llamo ${this.name}`);
    }
}

const sacha = new Persona('Sacha');
sacha.saludar();