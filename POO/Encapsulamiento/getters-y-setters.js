class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name
    }

    set name(nuevoNombre) {
        if(nuevoNombre === 'Curso Malito de Programación Básico') {
            console.error("ERROR... no puedes ponerle ese nombre");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica'
});

cursoProgBasica.name = 'Curso Malito de Programación Básico';
console.log(cursoProgBasica.name); //El nombre no cambió


//ES2020: Campos Privados (#): Hace imposible modificar la propiedad desde afuera sin utilizar el setter que definimos (Se podía con la '_', esto lo soluciona)

class Course {
    #name;
  
    constructor({
      name,
      classes = []
    }) {
      this.#name = name;
      this.classes = classes;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
        console.error('Web... no');
      } else {
        this.#name = nuevoNombrecito;
      }
    }
  }
  
  const cursoProgBasica = new Course({
      name: 'Curso de Programación Básica'
  });

  cursoProgBasica.#name = 'Curso de mamar gallo'; // Error Private field #name must be declared in an enclosing class
  cursoProgBasica.name = 'Curso de mamar gallo'; // Va a funcionar porque es el setter