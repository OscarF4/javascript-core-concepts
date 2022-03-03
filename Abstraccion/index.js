//Abstraccion sin prototipos
function isObject(subject) {
    return typeof subject == 'object';
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
};

const oscar = deepCopy(studentBase);
Object.seal(oscar);
// Object.defineProperty(oscar, 'name', {
//     value: 'Oscar',
//     configurable: false
// });

console.log(oscar);


//Factory Pattern y RORO
function requiredParam(param) {
    throw new Error(`${param} es obligatorio`);
}

function createStudent({
    name = requiredParam('name'), //Cuando no se envie el parametro
    email = requiredParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) { //Para que no pare la ejecucion sin argumentos
    return {
        name,
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        }
    }
}

const juan = createStudent({
    name: 'Juanito',
    age: 18,
    email: 'juanito@frijolitos.com',
    twitter: 'fjuandc'
});

console.log(juan);