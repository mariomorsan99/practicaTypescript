(function () {
    var nombre = 'luna';
    var apellido = 'mora';
    var edad = 28;
    var salida = nombre + "\n " + apellido + " \n " + edad + "  " + (edad + 200) + " " + ejemploLiteral();
    console.log(salida);
    function ejemploLiteral() {
        return edad + 20;
    }
})();
