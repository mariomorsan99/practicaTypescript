(function () {
    
 const nombre='luna';
 const apellido='mora'
 const edad=28

 let salida=`${nombre}\n ${apellido} \n ${edad}  ${edad+200} ${ejemploLiteral()}`;

 console.log(salida);


function ejemploLiteral() {
    return edad+20
}


})();