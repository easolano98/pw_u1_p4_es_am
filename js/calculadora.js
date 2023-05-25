function sumar(num1, num2) {
  return num1 + num2;
}
function sumarNumeros() {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + sumar(numero1, numero2);
}

function restarNumeros() {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + (numero1 - numero2);
}

function multiplicarNumeros() {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + numero1 * numero2;
}

function dividirNumeros() {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + numero1 / numero2;
}

function convertir(idCampo) {
  return parseInt(document.getElementById(idCampo).value);
}

function eliminarElemento(){
    document.getElementById('idEliminar').remove;
}

function insertarElemento(){
    document.getElementById('elemento').innerHTML='<strong>Importante</strong>'
}

