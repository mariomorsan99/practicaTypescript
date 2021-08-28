(function () {

//mas de una linea    
const funcionArrow=(valor:string)=>
{

    return valor;
}

//una sola linea
const funcionArrow2=(valor:string)=>valor.toUpperCase();


console.log( funcionArrow('luna'))
console.log(funcionArrow2('luna'))


///
const sumarNormal=(num:number,num1:number)=>
{
    
    return num+num1;

}

const sumaUnaLinea=(num:number, num1:number)=>num+num1;

console.log(sumarNormal(100,100))

console.log(sumaUnaLinea(100,100))
    

const alumno=
{
    nombre:'chris',
    timer()
    {
     setTimeout(() => {
         console.log(`${alumno.nombre}`)
     }, 5000);
      
    }
}


alumno.timer();


})();