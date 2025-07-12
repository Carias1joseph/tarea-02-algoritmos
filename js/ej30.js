// Crear una función que tome como parámetro un arreglo de números, retornar el número menor, si es un número negativo mostrar su valor absoluto.

function numeroMenor(numeros) {
  if (numeros.length === 0) return null;

  let menor = Math.min(...numeros);

  return Math.abs(menor);
}

console.log("Arreglo:", numeroMenor([1,2,3,4,5]));
