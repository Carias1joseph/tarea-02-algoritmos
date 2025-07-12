// Determinar si una palabra empieza con mayúscula o no.

let palabra = prompt("Ingresa una palabra:");
let caracter1 = palabra.charAt(0);

if (caracter1 >= 'A' && caracter1 <= 'Z') {
  console.log("La palabra empieza con mayúscula.");
} else {
  console.log("La palabra no empieza con mayúscula.");
}
