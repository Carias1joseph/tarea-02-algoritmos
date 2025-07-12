//  Crear un programa que determine si un string introducido por un usuario inicia con numero o con una letra.

let cadena = prompt("Ingresa una cadena de texto: ");
let caracter1 = cadena.charAt(0).toUpperCase();

if(caracter1 >= '0' && caracter1 <='9'){

  console.log('La cadena inicia con un numero');

} else if(caracter1 >= 'A' && caracter1 <= 'Z'){

  console.log('La cadena inicia con una letra');

}else {
  console.log('La cadena no inicia con numero o letras');
}