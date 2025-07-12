//A.

let array = [1,2,3,4,5,6];

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
}

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
array.forEach(elemento => { console.log(elemento);});

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
const incrementoArray = array.map(element => element + 1);
console.log(incrementoArray); 

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
const copia = array.map(elemento => elemento + 1);

console.log(copia); 

// f. Calcular el promedio

let total = 0;
for (let num of array) {
    total += num; 
}

const promedio = total / array.length; 
console.log(promedio);
