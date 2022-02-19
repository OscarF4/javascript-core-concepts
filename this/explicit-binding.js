'use strict';

const oscar = {
    name: 'Oscar',
    saludar: function (gritando, conDespedida) {
        const saludoNormal = `Hola, me llamo ${this.name}!`;
        const despedidaNormal = 'Chau!';

        const saludo = gritando ? saludoNormal.toUpperCase() : saludoNormal;
        const despedida = gritando ? despedidaNormal.toUpperCase() : despedidaNormal;

        console.log(saludo);

        if (conDespedida) {
            console.log(despedida);
        }
    }
};

const pepe = { name: 'Pepe' };
//Método Bind: Este método es el ideal para el manejo de eventos (Ver this-con-eventos-boton.js) porque deja enlazada la función con el contexto deseado, pero no se ejecuta de una (Como con CALL o APPLY)
const pepeSaluda = oscar.saludar.bind(pepe);
pepeSaluda(true, true);