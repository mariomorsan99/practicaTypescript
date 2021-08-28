(function () {

  interface xmen
  {
    nombre:string,
    edad:number

  }


  const wolverine:xmen=
  {
       nombre:'wolverine',
       edad:40

  }

  const mision=(her:xmen )=>
  {

      console.log(`es un xmen: ${her.nombre}`)
  }


 console.log(mision(wolverine))
  
  })();