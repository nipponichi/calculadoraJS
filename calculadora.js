
let valores = [];
//Constante declarando pantalla y donde identificarla
const pantalla = document.getElementById("pantalla");

//Intento de añadir valor de tecla a pantalla
function mostrarTecla (valor){
    pantalla.value += valor;
    valores.push (valor);
}

//Modifica el valor en pantalla a caracter vacío
function limpiarCaja(){
    pantalla.value = '';
}

//Hace la operación y muestra el resultado por pantalla
function resultado(){
    let resultado;
    if (valores[1]="+") {
        //Necesario para convertir valores a numeros y no concatenar los caracteres
        resultado = parseFloat(valores[0])+parseFloat(valores[2]);
        limpiarCaja();
        pantalla.value = resultado;
    }
}