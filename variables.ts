(function () {
    
let mensaje:string= 'hola';
let numero:number=1234;
let boolean:boolean=true;
let hoy=new Date();

let sintipo;
let esboleana=false;

sintipo=mensaje;

//object
let alumnos=
{
   nombre:"chistopher",
   materia:'',
   calificacion:10,

}

let villanos=
{
   nombre:"lex",
   poder:"conocimiento"


}


function llamaObjeto(alumno:string, con:string) {
    console.table( alumno+ '  '+ con);
}

llamaObjeto(villanos.nombre, villanos.poder)





})();