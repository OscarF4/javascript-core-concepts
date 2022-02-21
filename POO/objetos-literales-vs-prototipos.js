class Course {
    constructor({
        name,
        classes = []
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    clases: []
})

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
    clases: []
})

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML y CSS',
    clases: []
})

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
        'Curso de DataBusiness', 
        'Curso de Dataviz'
    ]
});

const escuelaVgs = new learningPath({
    id: 3,
    name: 'Escuela de Videojuegos',
    description: 'Aprende a hacer Videojuegos ya',
    category: 'Tecnología',
    courses: [
        cursoProgBasica,
        'Curso de Unity', 
        'Curso de Unreal Engine'
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
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const oscar = new Student({
    name: 'Oscar',
    username: 'oscarvedo',
    email: 'oscar@gmail.com' ,
    instagram: 'oscarvedo',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});