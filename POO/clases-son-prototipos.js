//Prototipos con la sintaxis de clases
class Student {
    constructor({ 
        name,
        age,
        email,
        cursosAprovados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprovados = cursosAprovados;
        this.email = email;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprovados.push(nuevoCursito);
    }
}

const miguelito = new Student({
    email: 'miguelito@platzi.com',
    name: 'Miguel',
    age: 28
});