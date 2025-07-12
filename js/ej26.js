// El usuario ingresa un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

let texto = prompt("Escribe números separados por comas por ejemplo: 1,2,3");
let arreglo = texto.split(",").map(Number);

console.log("Arreglo:", arreglo);
