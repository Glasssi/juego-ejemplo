let numeroSecreto = 0;
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //console.log(numeroSecreto)

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
  valorCaja.value = "";
}

function GenerarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego Del Número Secreto!");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  numeroSecreto = GenerarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de  intervalo de números
  //Generar el número aleatorio
  //Inicializar el número de intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
}
condicionesIniciales();