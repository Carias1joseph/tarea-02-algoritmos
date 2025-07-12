// Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

let n1 = prompt('Ingresa un numero entero');

if(!Number.isInteger(Number(n1))){
    alert('Valor no valido');
    console.log('Valor no valido');
    
}else {
    console.log('Valor valido');
}