// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let color = prompt("Escribe un color:").toLowerCase();

if (colores.includes(color)) {
  console.log("el color está en la lista.");
} else {
  console.log("el color no está en la lista.");
}
