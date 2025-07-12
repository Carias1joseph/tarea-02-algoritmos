// Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

let n = Number(prompt("Ingresa un número:"));
let contador = 1;

while (contador <= n) {
  console.log(contador);
  contador += 1;
}
