const sumar = (num1, num2) => num1 + num2;

const convertir = (idCampo) => {
  console.log("Convertir " + idCampo);
  return parseInt(document.getElementById(idCampo).value);
};

const sumarNumeros = () => {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + sumar(numero1, numero2);
};

const restarNumeros = () => {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + (numero1 - numero2);
};

const multiplicarNumeros = () => {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + numero1 * numero2;
};

const dividirNumeros = () => {
  var numero1 = convertir("idnum1");
  var numero2 = convertir("idnum2");
  document.getElementById("labelResultado").innerHTML =
    "Resultado: " + numero1 / numero2;
};

const eliminarElemento = () => document.getElementById("idEliminar").remove();

const insertarElemento = () =>
  (document.getElementById("elemento").innerHTML =
    "<strong>Importante</strong>");

const conceptoJavaScript = () => {
  //var
  //let
  //const
  //Declaracion de variables
  var variable1 = "Edison";
  var variable2 = 2;
  let variable3 = "Edison";
  let variable4 = 8;
  const variable5 = "Edison";
  const variable6 = 4;

  console.log(variable3);

  //Declaracion de Arreglos
  const diasSemana = ["Lunes", "Martes", "Miercoles"];
  console.log(diasSemana);
  console.log(diasSemana[0]);
  diasSemana.push("Jueves");
  diasSemana.push("Viernes");
  const diasFinSemana = ["Sabado", "Domingo"];
  console.log(diasSemana.concat(diasFinSemana));
  console.log(diasSemana);
  const diasCompletos = diasSemana.concat(diasFinSemana);
  console.log(diasCompletos);

  for (const dia of diasCompletos) {
    console.log(dia);
  }

  //Declaracion de objetos
  const persona = {
    nombre: "Erick",
    apellido: "Solano",
    edad: 25,
    ciudad: "Quito",
  };
  console.log(persona);

  //Un objeto dentro de otro objeto
  const persona2 = {
    nombre: "Pepe",
    apellido: "Solano",
    edad: 28,
    ciudad: "Quito",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius",
      anio: 1989,
    },
  };

  console.log(persona2);

  //const nombre = "Nombre prueba";
  //nombre = "nombre examen";

  const vector = [1, 2, 3];
  console.log(vector);
  vector[0] = 0;

  console.log(vector);

  //Desestructuracion de arreglos
  const dias2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const [dia1, dia2, dia3, dia4]=dias2;
  console.log(dia2);
  console.log(dia4);

  const [d1,d2,d3,d4,d5] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  console.log(d1);
  console.log(d5);

  const persona3 = {
    nombre: "Erick",
    apellido: "Solano",
    edad: 25,
    ciudad: "Quito",
  };

  const {nombre, ciudad}=persona3;
  console.log(nombre)
  console.log(ciudad)

  const persona4 = {
    nombre: "Pepe",
    apellido: "Solano",
    edad: 28,
    ciudad: "Quito",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius",
      anio: 1989,
    },
  };

  const {vehiculo} = persona4;
  console.log(vehiculo);
  console.log(vehiculo.marca);

  const {marca, anio} = vehiculo;
  console.log(marca);



};
