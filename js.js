
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

function sequentialSearch(element, array) {
    for (var i in array) {
        if (array[i] == element) return i;
    }
    return -1;
}
var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
console.log(sequentialSearch("g", letters));