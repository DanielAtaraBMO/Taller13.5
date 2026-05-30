const prompt = require("prompt-sync")();

// Ejericio 1 : Calculadora de propinas //


let total = prompt("Indique el total de la cuenta:");
total = Number(total);
let porcentaje = 0.19;

function calcularPropina(total, porcentaje){
    let totalcuenta = 0;
    let propina = 0;
    propina = total * porcentaje;
    totalcuenta = total + propina;
    console.log("La propina tiene el valor de:",propina);
    console.log("El valor total de la cuenta es:", totalcuenta);
        
    return totalcuenta;
}

calcularPropina(total,porcentaje);


//Ejercicio 2 : Validar contraeseña //

let contraseña = prompt("Digite su contraseña:");

function validarContraseña(contraseña) {
    if (contraseña.length > 8) {
        console.log("Su contraseña debe tener al menos 8 caracteres");
        return false;
    } else if (!/[0-9]/.test(contraseña)) {
        console.log("Su contraseña debe tener al menos un numero");
        return false;

    } else if (!/[A-Z]/.test(contraseña)) {
        console.log("Su contraseña debe tener al menos una mayuscula");
        return false;
    }
    console.log("Contraseña exitosa");

    return true;

}
console.log(validarContraseña(contraseña));


//Ejercicio 3 : Buscar producto en inventario //

const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalon", precio: 30 },
    { nombre: "Correa", precio: 15 },
    { nombre: "Saco", precio: 35 }
];

function buscarProducto(nombre, inventario) {

    for (let i = 0; i < inventario.length; i++) {

        if (nombre == inventario[i].nombre) {

            console.log("El producto existe");
            console.log("Nombre: " + inventario[i].nombre);
            console.log("Precio: $" + inventario[i].precio);

            return inventario[i];
        }
    }

    console.log("El producto no se encuentra en inventario");
    return null;
}

buscarProducto("Saco", inventario);



//Ejercicio 4 : Promeddio de notas //

let notasUsuario = prompt("Ingrese las notas separadas por comas:");

let notas = notasUsuario.split(",");

function calcularPromedio(notas) {

    let suma = 0;

    for (let a = 0; a < notas.length; a++) {

        suma = Number(notas[a]) + suma;

    }

    let promedio = suma / notas.length;

    console.log("El promedio es:", promedio.toFixed(2));

}

calcularPromedio(notas);


//Ejercicio 5 : Filtrar Usuariop por edad //

let Usuarios = [
    {nombre : "Ana",edad : 25},
    {nombre : "Carlos",edad : 15},
    {nombre : "Fabian",edad : 46},
    {nombre : "Luis",edad : 18},
    {nombre : "Miguel",edad : 2}
];

function filtrarUsuarios(Usuarios,edad){
    for ( let b = 0 ; b < Usuarios.length ; b++)
    {
        if( Usuarios[b].edad >= 18 )
            console.log(Usuarios[b].nombre);           
    }

}
filtrarUsuarios(Usuarios);


//Ejercicio 6 : Contador de Palabras //


function contadordePalabras (texto){
    let palabras = texto.split(" ");
    return palabras.length;
}

console.log(contadordePalabras("Este texto debe tener nueve palabras para el trabajo a a a a"));

 
//Ejercicio 7 : Banco //

let saldo = parseInt(prompt("Ingrese su saldo actual: "));
let monto = parseInt(prompt("Ingrese el monto a retirar: "));

function retirarDinero(saldo, monto){
    if (saldo >= monto) {
        let nuevosaldo = 0;
        nuevosaldo = saldo - monto ;
        console.log("Usted retiro el valor de $",monto);
        console.log("El nuevo saldo es:", nuevosaldo);
    }else{
        console.log("Error, Saldo insuficiente");
        
    }    
}
retirarDinero(saldo,monto);


//Ejercicio 8 : Cambio de monedas //
let montoconvertir = parseInt(prompt("Ingrese el monto a convertir: "));
let tipoMoneda = prompt("Ingrese USD si quiere la conversion a dolares o EUR si la quiere a euros: ");

function convertirMoneda(montoconvertir, monedaDestino) {
    if( tipoMoneda == "USD"){
        let dolar = 0;
        dolar = montoconvertir/3633;
        console.log("La conversion a USD tiene el valor de:",dolar);
        
    }else if( tipoMoneda == "EUR"){
        let euro = 0;
        euro = montoconvertir/4238;
        console.log("La conversion a EUR tiene el valor de:",euro);    
    }else{
        console.log("Error, tipo de Moneda invalida");
        
    } 
}

convertirMoneda(montoconvertir, tipoMoneda);