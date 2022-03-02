const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
};

const obj2 = {};

for (prop in obj1) {
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1); //También se ve afectado por referencia
const obj4 = Object.create(obj1); //Hace la copia en _proto_, lo cual trae problemas cuando vayamos a modificar estas propiedades, pues las tomará como nuevas y las tendremos afuera las nuevas y en proto las heredadas. [Trash]