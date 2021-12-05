
function saludar() {
    document.getElementById("titulo").innerHTML = "Buenos dias Estudiantes!";
}
document.getElementById("boton").onclick = function () {
    saludar();
}