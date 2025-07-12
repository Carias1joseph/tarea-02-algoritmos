// Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

let n = Number(prompt('Ingrese N: '));
let numero = 1;

while (numero <= n) {
    console.log(numero);
    numero += 2;
}
