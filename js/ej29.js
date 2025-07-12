// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este vacío debe devolver cero.

function Promedio(numeros) {
  if (numeros.length === 0) {
    return 0; 
  }

  let suma = numeros.reduce((a, b) => a + b, 0);
  return suma / numeros.length;
}

console.log("Promedio:", Promedio([20,30,40,50]));
