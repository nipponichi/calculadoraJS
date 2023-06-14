
let valoresEspacio = '';
let valores = [];
//Constante declarando pantalla y donde identificarla
const pantalla = document.getElementById("pantalla");

//Añade valor de tecla a pantalla
function mostrarTecla (valor){
    pantalla.value += valor;
}

//Modifica el valor en pantalla a caracter vacío
function limpiarPantalla(){
    pantalla.value = '';
}

//Mantiene el valor en pantalla pero limpia el array de valores
function limpiarValores(valor){
    valores.splice(0,3);
    pantalla.value = valor;
}

//Muestra la operacion seleccionada
function mostrarSigno(valor) {
    // Si el array de valores es menor o igual a una posición
    // permite seleccionar un símbolo
    if (valores.length <= 1) {
      valores.push(parseFloat(pantalla.value.split(' ')));
      pantalla.value += ` ${valor} `;
      valores.push(valor);
    }
}

//Mensaje alert si no introducimos valores y clickamos '='
function verificarValores() {
    if (valores.length == 0) {
      alert("Inserta valores");
    }
}
  
//Hace la operación y muestra el resultado por pantalla
function calcularResultado(){
    verificarValores();
    let resultado;
    valoresEspacio = pantalla.value.split(' ');
    valores.push(valoresEspacio[2])
    valoresEspacio.splice(0,3);

    //Según el valor encontrado en la posición 1 del array, realiza una operación.
    switch(valores[1]){
        case '+':
            resultado = parseFloat(valores[0]) + parseFloat(valores[2])
            limpiarValores(resultado);
            break;
        case '-':
            resultado = parseFloat(valores[0]) - parseFloat(valores[2])
            limpiarValores(resultado);
            break;
        case '/':
            resultado = parseFloat(valores[0]) / parseFloat(valores[2])
            limpiarValores(resultado);
            break;
        case '*':
            resultado = parseFloat(valores[0]) * parseFloat(valores[2])
            limpiarValores(resultado);
            break;
    }   
}