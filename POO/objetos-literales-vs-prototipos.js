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

    aprobarRuta() {
        console.log(`Felicitaciones, aprobaste la ruta: ${this.name}`);
    }
}

const escuelaWeb = new learningPath({
    id: 1,
    name: 'Escuela de Desarrollo Web',
    description: 'Aprende desarrollo web ya',
    category: 'Tecnología',
    courses: ['HTML Básico', 'CSS Avanzado', 'Javascript Profesional']
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
    learningPaths: escuelaWeb
});