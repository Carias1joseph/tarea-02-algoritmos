// Crear un programa que determine si un numero introducido en un Prompt es par o no, la respuesta será mostrada en la consola.

let numero = Number(prompt('Ingrese un numero: '));

 if (numero % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
