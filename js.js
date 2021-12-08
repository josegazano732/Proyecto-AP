
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

let arreglo = [10, 11, 3, 20, 5];
let mayorQueDiez = arreglo.filter(element => element > 10);

