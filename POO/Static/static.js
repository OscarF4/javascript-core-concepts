//Static: Si quieres tener acceso a una variable o método sin tener que crear instancias de una clase usa la palabra static antes de crear tu variable o método.
class Patito {
    static sonidito = 'Cuak!';
    static hacerSonidito() {
        return 'Cuaaaaakk!!';
    }
}

console.log(Patito.sonidito);
console.log(Patito.hacerSonidito());