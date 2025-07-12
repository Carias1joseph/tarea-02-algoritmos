// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, pista: utilizar reduce().

let array = [1,2,3,4,5,6,7,8,9,10];

function Pares(lista) {
  return lista.reduce((resultado, num) => {
    if (num % 2 === 0) {
      resultado.push(num);
    }
    return resultado;
}, []);
}

console.log("Numeros pares:", Pares(array));
