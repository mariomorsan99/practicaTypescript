(function () {
    var wolverine = {
        nombre: 'wolverine',
        edad: 40
    };
    var mision = function (her) {
        console.log("es un xmen: " + her.nombre);
    };
    console.log(mision(wolverine));
})();
