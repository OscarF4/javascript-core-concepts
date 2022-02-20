//Objeto literal
const oscar = {
    name: 'Oscar',
    age: 24,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS'
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};
oscar.aprobarCurso('Curso de CSS Grid');
console.log(oscar);

//Prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student( //El método estará dentro de __proto__
    'Juanita Alejandra',
    15,
    [
        'Introducción a la Producción de Videojuegos',
        'Curso de creación de personajes'
    ]
);