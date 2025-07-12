// Usando for, crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

let n1 = Number(prompt('Ingrese un numero:'));

let sumaDivisores = 0;

for (let i = 1; i < n1; i++) {
    if(n1 % i === 0){
        sumaDivisores+=i;
    }
}

if(sumaDivisores === n1){
    console.log(`${n1} es un numero perfecto.`);
} else{
    console.log(`${n1} no es un numero perfecto.`);
}





