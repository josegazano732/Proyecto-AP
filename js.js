let miTrabajo = document.querySelector("#lugarTrabajo")
console.log(miTrabajo);












/*
function saludar() {
    document.getElementById("titulo").innerHTML = "Buenos dias Estudiantes!";
}
document.getElementById("boton").onclick = function () {
    saludar();
}

// for

for (let i = 0; i <= 10; i++) {
    console.log("Numero " + i);

}

// var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
//for (i = 0; i <= dias.length - 1; i++) {
//    console.log(dias[i]);
//}

// while (mientras)
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]
var numeroDias = dias.length - 1;
var i = 0;
while (i <= numeroDias) {
    console.log(dias[i]);
    i++;
}

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let nombres = ["Jose", "Juan", "Manu", "Hugo", "Ana"];
let personas = [{ Nombre: "Jose", Edad: 35 }, { Nombre: "Juan", Edad: 30 }, { Nombre: "Hugo", Edad: 38 }];

let resultado = personas.find(x => x.Edad >= 36);

//let resultado = nombres.filter(x => x.length > 3);"Filtra los string que son mayo a 3 en su longitud"
//let resultado = arreglo.filter(x => x >= 10); "Filtra nros mayor o igual a 10"
//let resultado = arreglo.filter(x => x % 2 === 0); "Filtra los nros que son resto de 2"
//let resultado = arreglo.includes(9); "Se filtro si dicho nro se encuentra en la lista array"

//function funcion(value) {
//  return value % 3 === 0;
//}

console.log(resultado);

// Ejemplo esto es funcion Math.max y min
let listaNumero = Math.min(2, 15, 94, 54, 46, 32);
console.log(listaNumero);


// Ejemplo Busqueda secuencial

var letras = ["a", "b", "c", "d", "e", "f"];
function busquedaSecuencial(elemento, lista) {
    for (var x in lista) {
        if (lista[x] == elemento)
            return x;
    }
    return -1;
}
console.log(busquedaSecuencial("f", letras));

// Ejemplo ordenamiento

let listadoNro = ["Posadas", "Obera", "Apostoles", "Concepcion", "Alem"];
console.log(listadoNro.sort());


// Ejemplo manipular elementos del DOM:


let elementoId = document.getElementById("elementoUno"); // se obtiene elemento ID de HTML.
let crearDiv = document.createElement("div"); // Se crea un nuevo elemento DIV.
elementoId.appendChild(crearDiv); // Se agrega el nuevo elemento DIV.
let elementoParrafo = document.createElement("p");
*/

// --------------------------------------------------------
/*
let titulo = document.getElementById("encabezado");
titulo.style.color = "white";


let contenido = document.getElementById("concepto");
//console.log(contenido.innerHTML);

let textos = document.getElementsByTagName("p");
textos[0].style.textAlign = "right";
//console.log(textos[3].innerHTML);


// Ej. toma elemento concepto por su id y modifica su contenido.//
document.querySelector("#concepto").textContent = "Este es mi nuevo texto"

//Se accede al head
//console.log(document.head);

//Se accede al body
console.log(document.body);

//Se accede a un elemento por su ID.
console.log(document.getElementById("encabezado"));

//Se accede a su elemento por su ID con querySelector.
console.log(document.querySelector("#concepto"));

//Se accede a su elemento por su CLASE.
console.log(document.querySelector(".caracteristicas"));

//Se accede a un elemento por su propio nombre ejemplo "section".
console.log(document.querySelector("section"));

//Se accede a todos los elementos
console.log(document.querySelectorAll("div"));
*/

/* Elementos */
//Se accede a elemento y se modifica.
//const mitexto = document.querySelector(".btn-info");
//const textonuevo = document.getElementById("concepto");

//mitexto.textContent = "Esto es un parrafo modificado en js a traves de un querySelector al elemento p con clase (mi-texto) ";

//mitexto.addEventListener("click", () => {
//    textonuevo.textContent = "Esto es un parrafo logrado desde una funcion.";
//})
