const app = {
    inicio: () => {
        this.iniciaFastClick();
        this.iniciaBoton();
    },
    iniciaFastClick: () => {
        FastClick.attach(document.body);
    },
    iniciaBoton: () => {
        let buttonAction = document.querySelector("#button-action");
        buttonAction.addEventListener('click',this.tomarFoto);
    },
    tomarFoto: () => {
        const opciones = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 300,
            targetHeight: 300,
            correctOrientation: true
        };
        navigator.camera.getPicture(app.tomarFoto,app.errorTomarFoto,opciones);
    },
    fotoTomada: (imageURI) => {
        let image = document.querySelector("#foto");
        image.src = imageURI;
    },
    errorTomarFoto: (message) => {
        console.log("Fallo al tomar foto o foto cancelada"+message);
    }
}

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded', () => app.inicio());
}