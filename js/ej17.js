// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

let n = Number(prompt("Ingrese N:"));
let m = Number(prompt("Ingrese M:"));
let suma = 0;
let i = n + 1;

while (i < m) {
    if (i % 2 === 0) {
        console.log(`Número par: ${i}`);
        suma += i;
    }
    i++;
}

console.log(`La suma de los números ${n} y ${m} es: ${suma}`);
10