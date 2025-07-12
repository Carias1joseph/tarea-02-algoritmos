// 23. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let numeros = [];

for (let i = 0; i < 20; i++) {
  let aleatorio = Math.floor(Math.random() * 100); // Número entre 0 y 99
  numeros.push(aleatorio); // Guardar en el array
}

console.log("Numeros del array:", numeros);
