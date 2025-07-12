// Todos los ejercicios anteriores debe replicarlos con el ciclo for.

// Ejercicio 13
alert('Ejercicio 13: Usando for mostrar todos los números de 1 a n aumentando de 1 en 1 donde n loingresa el usuario en un prompt.')
let n = Number(prompt("Ej13, Ingresa un número:"));

for (let i = 1; i <= n; i++) {
  console.log(i);
  
}

console.log('---------------------------------\n');

alert('Ejercicio 14: Usando for mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.');
let n1 = Number(prompt("Ej 14, Ingresa un número:"));

for (let i = 1; i <= n; i += 2) {
  console.log(i);
}

console.log('---------------------------------\n');

alert('Ejercicio 15: Usando for mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.');
let n2 = Number(prompt("Ej15, Ingresa un número:"));

for (let i = n2; i >= 1; i--) {
  console.log(i);
}

console.log('---------------------------------\n');


let n3 = Number(prompt("Ej16, Ingresa un número para ver su tabla de multiplicar:"));

for (let i = 1; i <= 12; i++) {
  console.log(`${n3} x ${i} = ${n3 * i}`);
}

console.log('---------------------------------\n');

alert('Ejercicio 17: Usar for, realizar la suma de todos los números pares entre N y M donde N y M losingresa un usuario.');

let N = Number(prompt("Ej17, Ingresa el número N (inicio):"));
let M = Number(prompt("Ej17, Ingresa el número M (fin):"));
let suma = 0;

for (let i = N; i <= M; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}

console.log(`La suma de los numeros es: ${suma}`);



