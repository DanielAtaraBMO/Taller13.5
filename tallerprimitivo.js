// 1. VARIABLES Y TIPO DE DATOS //


    //      Ejercicio # 1  //

let nombre = "Daniel"; 
let edad = "25";
let esEstudiante = true;

    //      Ejercicio # 2  //
let sinValor;  // variable sin valor
let valorNulo = null ; // variable null


// 2.INGRESO DE DATGS POR TECLADO //

    //      Ejercicio # 1  //
const prompt = require("prompt-sync")();
let fechan = prompt("Cual es tu año de nacimiento:");
let calcularedad = 0;

calcularedad = 2026 - fechan;
console.log("Tu edad es :", calcularedad);

    //      Ejercicio # 2  //
let numero1 = parseInt(prompt("Dame un numero: "));
let numero2 = parseInt(prompt("Dame otro numero: "));

suma = numero1 + numero2;
console.log("La suma de los numeros es :", suma);

    //  3. CONDICIONALES   //

//      Ejercicio # 1  //
let edadusuario = prompt("Dame tu edad: ");

if ( edadusuario >= 18){
    console.log("Puedes entrar");
    
}else{
    console.log("No puedes entrar");    
}
//      Ejercicio # 2  //

let numeronuevo = parseInt(prompt("dame un número cualquiera: "));

if(numeronuevo > 0){
    console.log("El numero es positivo");    
}else if( numeronuevo < 0 ){
    console.log("El numero es negativo");    
}else{
    console.log("El numero es 0");   
}


    //  3. Bucle While  //

//      Ejercicio # 1  //

let numerobucle = parseInt(prompt("Dame un numero: "));
let bucleinicio = 0;
while (bucleinicio != numerobucle) {
    bucleinicio++; 
    console.log(bucleinicio);   
}

//      Ejercicio # 2  //
let pin = prompt("Ingrese la contraseña: ");
let contraseña = "1234";

while (pin != contraseña) {
    console.log("Contraseña incorrecta, vuelva a ingresar la contraseña");
    pin = prompt("Ingrese la contraseña: ");
}

console.log("Contraseña correcta");

    //  3. Bucle for  //

//      Ejercicio # 1  //

let i = 0;

for (i; i < 11; i++) {
    console.log(i);
}

//      Ejercicio # 2  //
let mult = prompt("Dame un número para multiplicar hasta el 10:");

for (let ind = 1; ind <= 10; ind++) {
    let resultado = ind * mult;
    console.log(mult + " x " + ind + " = " + resultado);
}