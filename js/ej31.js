// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

let array = [5,4,3,2,1];

function invertir(lista) {
  return lista.slice().reverse(); 
}

console.log(`Arreglo original ${array}`);

console.log(`Arreglo invertido ${invertir(array)}`);
