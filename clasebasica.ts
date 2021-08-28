(function () {


 class Departamentos {

    ubicacion:string
    direccion:string
    

    constructor(ubica:string)
    {

     this.ubicacion=ubica;
        
    }

 }


 const depa=new Departamentos("polanco");


 console.log(depa);

    
    })();