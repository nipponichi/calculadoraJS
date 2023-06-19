
let valoresEspacio = [];
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
    //Elimina 3 valores desde la posición 0
    valores.splice(0,3);
    pantalla.value = valor;
}

//Muestra la operacion seleccionada
function mostrarSigno(valor) {
    // Si el array de valores es menor o igual a una posición
    // permite seleccionar un símbolo
    if (valores.length <= 1) {
      //Convierte el primer valor a número  
      valores.push(parseFloat(pantalla.value.split(' ')));
      //Toma de pantalla valor del signo rodeado de espacios en blanco
      pantalla.value += ` ${valor} `;
      //Carga el array con el signo seleccionado
      valores.push(valor);
    }
}

//Mensaje alert si no introducimos valores y clicamos '='
function verificarValores() {
    if (valores.length == 0) {
      alert("Inserta valores");
      return true;
    } else {
        return false;
    }
}

//Mensaje alert si excedemos los valores en alguna de las posiciones del array de la condicion y clicamos '='
function verificarResultado() {
    if (valores[0] >= 999999999 || valores[2] >= 999999999) {
      alert("Se ha excedido el poder de la calculadora, hazte premium");
      return true;
    } else {
        return false;
    }
}

//Calcula la potencia de un número
function potencia(){
    valores.push(parseFloat(pantalla.value.split(' ')));
    resultado = parseFloat(valores[0]) * parseFloat(valores[0]);
    limpiarValores(resultado);
    valores.splice(0,3);
}
  
//Hace la operación y muestra el resultado por pantalla
function calcularResultado(){
    let resultado;
    valoresEspacio = pantalla.value.split(' ');
    valores.push(valoresEspacio[2]);

    //Verificamos si hay valores, o los valores son demasiado grandes
    //Y ejecutamos si alguna condicion se cumple, eliminamos los valores
    //De la pantalla y el array valores. Return detiene la ejecución
    if (verificarValores() || verificarResultado()){
        limpiarValores();
        limpiarPantalla();
        return;
    }
    //Eliminamos los valores del segundo array
    //para no interferir en futuros calculos
    valoresEspacio.splice(0,3);

    //Según el valor encontrado en la posición 1 del array, realiza una operación.
    switch(valores[1]){
        case '+':
            resultado = parseFloat(valores[0]) + parseFloat(valores[2]);
            limpiarValores(resultado);
            break;
        case '-':
            resultado = parseFloat(valores[0]) - parseFloat(valores[2]);
            limpiarValores(resultado);
            break;
        case '/':
            resultado = parseFloat(valores[0]) / parseFloat(valores[2]);
            limpiarValores(resultado);
            break;
        case '*':
            resultado = parseFloat(valores[0]) * parseFloat(valores[2]);
            limpiarValores(resultado);
            break;
    }  
}