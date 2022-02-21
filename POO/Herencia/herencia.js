class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish'
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    isFree: true
});

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS'
});

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML y CSS',
    lang: 'english'
});

const cursoDataBusiness = new Course({
    name: 'Curso de DataBusiness'
});

const cursoDataViz = new Course({
    name: 'Curso de Dataviz'
});

const cursoUnity = new Course({
    name: 'Curso de Unity 3D'
});

const cursoUnreal = new Course({
    name: 'Curso de Unreal Engine'
});

class learningPath {
    constructor({
        id,
        name,
        description,
        category,
        courses = []
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.courses = courses;
    }
}

const escuelaWeb = new learningPath({
    id: 1,
    name: 'Escuela de Desarrollo Web',
    description: 'Aprende desarrollo web ya',
    category: 'Tecnología',
    courses: [
        cursoProgBasica, 
        cursoDefinitivoHTML, 
        cursoPracticoHTML
    ]
});

const escuelaData = new learningPath({
    id: 2,
    name: 'Escuela de Data Science',
    description: 'Aprende Data Science ya',
    category: 'Tecnología',
    courses: [
        cursoProgBasica,
        cursoDataBusiness, 
        cursoDataViz
    ]
});

const escuelaVgs = new learningPath({
    id: 3,
    name: 'Escuela de Videojuegos',
    description: 'Aprende a hacer Videojuegos ya',
    category: 'Tecnología',
    courses: [
        cursoProgBasica,
        cursoUnity, 
        cursoUnreal
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props); //Hace que THIS sea el Super Prototipo Student
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, solo puedes tomar cursos gratis`)
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, no puedes tomar cursos en inglés`)
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
} 

//Crear Estudiantes
const oscar = new FreeStudent ({
    name: 'Oscar',
    username: 'oscarvedo',
    email: 'oscarvedo@gmail.com',
    twitter: 'oscarvedo',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});

const miguelito = new BasicStudent ({
    name: 'Miguelito',
    username: 'migueloco',
    email: 'mimigueloco@gmail.com',
    twitter: 'migueloco',
    learningPaths: [
        escuelaData
    ]
});