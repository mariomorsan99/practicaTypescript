(function () {
    console.log("inicio");
    var prom = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('termino el tiempo');
        }, 5000);
    });
    prom
        .then(function (mensaje) { return console.log(mensaje); })["catch"](function (err) { return console.warn(err); });
    console.log("fin");
})();
