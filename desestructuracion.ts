(function () {

const justiceLeague=
{
   nombre:'clark',
   alias:'superman',
   debilidad:'kriptonita'

}


console.log(justiceLeague.nombre)
console.log(justiceLeague.debilidad)


//con desestructuracion
   const { nombre, alias, debilidad}=justiceLeague;


   console.log(nombre)
   console.log(alias)



//desestructuracion como argumento de un objeto

const extraer=({ nombre, alias}:any)=>
{

    console.log(nombre)
    console.log(alias)
}


extraer(justiceLeague)


//desestruturacion de un array

const advengers: string[]=["spiderman", "ironman" ];


const [ uno, dos ]= advengers; 

console.log(uno)
console.log(dos);


})();