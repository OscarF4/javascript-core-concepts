class Comment {
    constructor({
        username,
        comment
    }) {
        this.username = username;
        this.comment = comment;
    }
}

const primerComentario = new Comment({
    username: 'oscarvedo',
    comment: 'Este es el primer comentario'
});

class Class {
    constructor({
        name,
        duration,
        comments = []
    }) {
        this.name = name;
        this.duration = duration;
        this.comments = comments;
    }
}

const claseIntroductoria = new Class ({
    name: 'Introducción a los computadores',
    duration: 3,
    comments: primerComentario
});

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
    classes: [claseIntroductoria]
});

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
    classes: [claseIntroductoria]
});

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML y CSS',
    classes: [claseIntroductoria]
});

const cursoDataBusiness = new Course({
    name: 'Curso de DataBusiness',
    classes: []
});

const cursoDataViz = new Course({
    name: 'Curso de Dataviz',
    classes: []
});

const cursoUnity = new Course({
    name: 'Curso de Unity 3D',
    classes: []
});

const cursoUnreal = new Course({
    name: 'Curso de Unreal Engine',
    classes: []
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