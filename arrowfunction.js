(function () {
    //mas de una linea    
    var funcionArrow = function (valor) {
        return valor;
    };
    //una sola linea
    var funcionArrow2 = function (valor) { return valor.toUpperCase(); };
    console.log(funcionArrow('luna'));
    console.log(funcionArrow2('luna'));
    ///
    var sumarNormal = function (num, num1) {
        return num + num1;
    };
    var sumaUnaLinea = function (num, num1) { return num + num1; };
    console.log(sumarNormal(100, 100));
    console.log(sumaUnaLinea(100, 100));
    var alumno = {
        nombre: 'chris',
        timer: function () {
            setTimeout(function () {
                console.log("" + alumno.nombre);
            }, 5000);
        }
    };
    alumno.timer();
})();
