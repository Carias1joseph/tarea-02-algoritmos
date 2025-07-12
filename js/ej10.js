// Crear un programa donde se introduzcan los tres angulos internos de un triangulo y se determine si el triangulo es valido o no.

let angulo1 = Number(prompt('Ingrese el primer angulo:'));
let angulo2 = Number(prompt('Ingrese el segundo angulo:'));
let angulo3 = Number(prompt('Ingrese el tercer angulo:'));


if(angulo1 + angulo2 + angulo3 === 180){

  console.log('Triangulo Valido');
  
  if(angulo1 === angulo2 && angulo1 === angulo3){
    console.log('Tipo de triangulo: Equilatero');
  } else if(angulo1 === angulo2 || angulo1 === angulo3 || angulo2 === angulo3){
    console.log('El triangulo es valido\n Tipo de triangulo: Isoceles');
  } else {
    console.log('Tipo de Triangulo: Escaleno');
  }
}else{
  console.log('Triangulo no valido');
  
}