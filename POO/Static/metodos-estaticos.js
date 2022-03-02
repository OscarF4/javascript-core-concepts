//Métodos Estáticos del super prototipo Object
const oscar = {
    name: 'Oscar',
    age: 24,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(oscar));
console.log(Object.getOwnPropertyNames(oscar));
console.log(Object.entries(oscar));

console.log(Object.getOwnPropertyDescriptors(oscar));

//Crear propiedades en nuestro objeto, pudiendo editar los DESCRIPTORS
Object.defineProperty(oscar, 'pruebaNasa', {
    value: 'Extraterrestres',
    writable: true,
    enumerable: true,
    configurable: true
});