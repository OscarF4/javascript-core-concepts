//Métodos Estáticos del super prototipo Object
const oscar = {
    name: 'Oscar',
    age: 24,
    approvedCourses: ['Curso 1'],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(oscar));
// console.log(Object.getOwnPropertyNames(oscar));
// console.log(Object.entries(oscar));


//Crear propiedades en nuestro objeto, pudiendo editar los DESCRIPTORS
// Object.defineProperty(oscar, 'pruebaNasa', {
//     value: 'Extraterrestres',
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// Object.defineProperty(oscar, 'navigator', {
//     value: 'Chrome',
//     writable: true,
//     enumerable: false,
//     configurable: true
// });

// Object.defineProperty(oscar, 'editor', {
//     value: 'VSCode',
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(oscar, 'terminal', {
//     value: 'WSL',
//     writable: true,
//     enumerable: true,
//     configurable: false
// });

// console.log(Object.getOwnPropertyDescriptors(oscar));

//Seal(): Configurable a FALSE y Freeze(): 
Object.seal(oscar);
// y Freeze(): Configurable y writable a FALSE
Object.seal(oscar);

console.log(Object.getOwnPropertyDescriptors(oscar));
