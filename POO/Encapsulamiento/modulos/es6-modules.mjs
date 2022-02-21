//Encapsulamiento de archivos con módulos
function videoPlay(id) {
    const urlSecreta = `https://platziultrasecreto/${id}`;
    console.log(`Se está reproduciendo desde la URL: ${urlSecreta}`);
}

function videoStop(id) {
    const urlSecreta = `https://platziultrasecreto/${id}`;
    console.log(`Pausamos la URL: ${urlSecreta}`);
}

export class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}

const claseDeDiseno = new PlatziClass({
    name: 'Clase de Diseño',
    videoID: 39412
});