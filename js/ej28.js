// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.

function palabrasVocal(palabras) {
  return palabras.filter(p => /^[aeiouáéíóú]/i.test(p));
}

console.log("Ejercicio 28:", palabrasVocal(["árbol", "perro", "uva", "elefante", "gato"]));
