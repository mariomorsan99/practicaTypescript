(function () {
    var justiceLeague = {
        nombre: 'clark',
        alias: 'superman',
        debilidad: 'kriptonita'
    };
    console.log(justiceLeague.nombre);
    console.log(justiceLeague.debilidad);
    //con desestructuracion
    var nombre = justiceLeague.nombre, alias = justiceLeague.alias, debilidad = justiceLeague.debilidad;
    console.log(nombre);
    console.log(alias);
    //desestructuracion como argumento de un objeto
    var extraer = function (_a) {
        var nombre = _a.nombre, alias = _a.alias;
        console.log(nombre);
        console.log(alias);
    };
    extraer(justiceLeague);
    //
    var advengers = ["spiderman", "ironman"];
    var uno = advengers[0], dos = advengers[1];
    console.log(uno);
    console.log(dos);
})();
