// EJERCICIO 1 //

function Libro(titulo, autor) {

    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado == true) {
            console.log("Error, el libro ya se encuentra prestado");
        }
        else {
            this.prestado = true;
            console.log(`Haz tomado prestado el Libro ${titulo}`);
        }
    }
}

let Libro1 = new Libro("Mil años de soledad ", "Gabriel García");

console.log("Primer intento");
Libro1.prestar();
console.log("Segundo intento");
Libro1.prestar();


// EJERCICIO 2 //

function listaCompras(){

    this.productos = [];

    this.agregar = function (elemento) {
        this.productos.push(elemento)    
    }

    this.mostrar = function (){
        for (let i = 0; i < this.productos.length; i++){
        console.log((i+1)  + ". " + this.productos[i]);           
        }
    }
    
}
let lista1 = new listaCompras();
lista1.agregar("leche");
lista1.agregar("pan");
lista1.agregar("huevos");
lista1.agregar("tostadas");
lista1.agregar("queso");
lista1.mostrar();

// EJERCICIO 3 //

function Reproductor(){

    this.estado = "detenido";
    
    this.play = function (){
        if (this.estado == "detenido" || this.estado == "pausado" ) {
            this.estado = "reproduciendo";
            console.log("Reproduciendo Musica...");            
        }else{
            console.log("Ya se esta reproduciendo");            
        }
    }
    this.pausar = function(){
        if (this.estado == "reproduciendo" ) {
            this.estado = "pausado";
            console.log("Musica pausada");
           } else {
            console.log("No hay musica reproduciendose");            
           }
    }
    this.detenido = function (){
        this.estado = "detenido";
        console.log("Musica detenida");
    }
}


let LG = new Reproductor();
LG.play();
LG.pausar();
LG.play();
LG.play();
LG.detenido();
// EJERCICIO 4: Carrito de compras con descuentos //

function Carrito() {
    this.productos = [];
    this.total = 0;
    this.agregarProductos = function (name, price) {
        this.productos.push(name,price);
        console.log("Producto agregado");
    },
        this.calcularDescuento = function () {
            let totalcompras = 0;
            let porcentaje = 0;
            let descuento = 0;
            let pagar = 0;
            
            for (let d = 1; d < this.productos.length; d = d + 2) {

                totalcompras += this.productos[d];   
            }
            if (totalcompras >= 100) {
                porcentaje = 0.1;
                descuento = (totalcompras * porcentaje);
                console.log(descuento)
                pagar = totalcompras - descuento;
                console.log("El descuento tiene un valor de:", descuento);
                console.log("El valor a pagar es:", pagar);
            } else if (totalcompras >= 50) {
                porcentaje = 0.05;
                descuento = (totalcompras * porcentaje);               
                pagar = totalcompras - descuento;
                console.log("El descuento tiene un valor de:", descuento);
                console.log("El valor a pagar es:", pagar);
            } else {
                pagar = totalcompras;
                console.log("El valora a pagar es:", pagar);
            }
        }
}

let Compras = new Carrito();
Compras.agregarProductos("leche", 20);
Compras.agregarProductos("queso", 100);
Compras.agregarProductos("huevos", 30);
Compras.calcularDescuento();