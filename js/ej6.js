// Escribir un programa que escriba en pantalla los divisores de un numero dado.

let n1 = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
      console.log(i);
    }
}