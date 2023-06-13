
let valoresEspacio = '';
let valores = [];
//Constante declarando pantalla y donde identificarla
const pantalla = document.getElementById("pantalla");

//Intento de añadir valor de tecla a pantalla
function mostrarTecla (valor){
    pantalla.value += valor;
}

//Modifica el valor en pantalla a caracter vacío
function limpiarPantalla(){
    console.log("limpiarPantalla")
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
      /*valoresEspacio =*/ pantalla.value.split(' ');
      valores.push(parseFloat(pantalla.value));
      pantalla.value += ` ${valor} `;
      valores.push(valor);
    }
  }
  
//Hace la operación y muestra el resultado por pantalla
function calcularResultado(){
    let resultado;
    valoresEspacio = pantalla.value.split(' ');
    valores.push(valoresEspacio[2])
    switch(valores[1]){
        case '+':
            resultado = parseFloat(valores[0]) + parseFloat(valores[2])
            limpiarValores(resultado)
            break;
        case '-':
            resultado = parseFloat(valores[0]) - parseFloat(valores[2])
            limpiarValores(resultado)
            break;
        case '/':
            resultado = parseFloat(valores[0]) / parseFloat(valores[2])
            limpiarValores(resultado)
            break;
        case '*':
            resultado = parseFloat(valores[0]) * parseFloat(valores[2])
            limpiarValores(resultado)
            break;
    }   
}