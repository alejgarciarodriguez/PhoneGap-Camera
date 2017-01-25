var _this = this;
var app = {
    inicio: function () {
        _this.iniciaFastClick();
        _this.iniciaBoton();
    },
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    iniciaBoton: function () {
        var buttonAction = document.querySelector("#button-action");
        buttonAction.addEventListener('click', _this.tomarFoto);
    },
    tomarFoto: function () {
        var opciones = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            targetWidth: 300,
            targetHeight: 300,
            correctOrientation: true
        };
        navigator.camera.getPicture(app.tomarFoto, app.errorTomarFoto, opciones);
    },
    fotoTomada: function (imageURI) {
        var image = document.querySelector("#foto");
        image.src = imageURI;
    },
    errorTomarFoto: function (message) {
        console.log("Fallo al tomar foto o foto cancelada" + message);
    }
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () { return app.inicio(); });
}
