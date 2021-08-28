(function () {
    var mensaje = 'hola';
    var numero = 1234;
    var boolean = true;
    var hoy = new Date();
    var sintipo;
    var esboleana = false;
    sintipo = mensaje;
    //object
    var alumnos = {
        nombre: "chistopher",
        materia: '',
        calificacion: 10
    };
    var villanos = {
        nombre: "lex",
        poder: "conocimiento"
    };
    function llamaObjeto(alumno, con) {
        console.table(alumno + con);
    }
    llamaObjeto(villanos.nombre, villanos.poder);
})();
