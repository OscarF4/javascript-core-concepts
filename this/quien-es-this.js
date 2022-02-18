//Cuando combinamos el Default Binding y el Implicit Binding, miremos cual se aplicaria
'use strict';

const oscar = {
    nombre: 'Oscar',
    twitter: '@oscarvedo',
    saludar : function () {
        console.log(`Hola, me llamo ${this.nombre}`); //Implicit Bind
        this.siguemeEnTwitter(); //THIS = OSCAR{}
    },
    siguemeEnTwitter: function () {
        console.log(`Seguime en Twitter: ${this.twitter}`);
    }
};

oscar.saludar();


//Cuando guardamos un método dentro de una variable para reutilizarla, THIS se enlaza con el Default Binding, siendo THIS = UNDEFINED

const jose = {
    name: 'Jose',
    saludar: function () {
        console.log(`Hola, me llamos ${this.name}`);
    }
};

const saludar = jose.saludar;
saludar(); //Las funciones sueltas se elazan con Default Binding