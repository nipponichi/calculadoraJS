
let valoresEspacio = '';
let valores = [];
//Constante declarando pantalla y donde identificarla
const pantalla = document.getElementById("pantalla");

//Intento de añadir valor de tecla a pantalla
function mostrarTecla (valor){
    pantalla.value += valor;
    console.log("mostrarTecla");
    console.log(valor);
    console.log(valores[0]);
    console.log(valores[1]);
    console.log(valores[2]);
    console.log(valores[3]);
}

//Modifica el valor en pantalla a caracter vacío
function limpiarPantalla(){
    console.log("limpiarPantalla")
    pantalla.value = '';
    valores.splice(0,3);
}

function limpiarValores(valor){
    valores.splice(0,3);
    pantalla.value = valor;
}
//Muestra la operacion seleccionada
function mostrarSigno(valor) {
    // Si el array de valores es menor o igual a una posición
    // permite seleccionar un símbolo
    if (valores.length <= 1) {
      valoresEspacio = pantalla.value.split(' ');
      valores.push(parseFloat(pantalla.value));
      pantalla.value += ` ${valor} `;
      valores.push(valor);
    }
    console.log("mostrarSigno");
    console.log(valores[0]);
    console.log(valores[1]);
    console.log(valores[2]);
  }
  

//Hace la operación y muestra el resultado por pantalla
function calcularResultado(){
    let resultado;
    console.log("Valor array simbolo "+valores[1]);
    valores.push(pantalla.value);
    if (valores[1] == "+") {
        //Necesario para convertir valores a numeros y no concatenar los caracteres
        resultado = parseFloat(valores[0])+parseFloat(valores[2]);
        console.log(valores[0]);
        console.log(valores[1]);
        console.log(valores[2]);
        console.log(resultado);
        console.log(valores.length);
        limpiarValores(resultado);
        pantalla.value = resultado;
    }
}