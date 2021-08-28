

(function () {

  
  console.log("inicio")

    const prom= new Promise((resolve, reject)=>{

      setTimeout(() => {
        
        resolve('termino el tiempo');
        //reject('se termino el tiempo')

      }, 5000);

    });


    prom
    .then(mensaje=> console.log(mensaje))
    .catch(err=>console.warn(err))




   console.log("fin");



})();