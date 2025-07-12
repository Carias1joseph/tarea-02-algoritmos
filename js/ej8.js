// Crear un programa donde se determine si un numero introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log.

let numero = Number(prompt('Ingrese un numero:'));

if(numero % 5 === 0){
  console.log('El numero es divisible por 5');
} else{
  console.log('El numero no es divisible por 5');
}