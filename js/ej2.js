// Escriba un programa que pida 3 numeros y escriba en la consola el mayor de los tres.

let n1 = Number(prompt("Ingrese el primer numero"));

let n2 = Number(prompt("Ingrese el segundo numero"));

let n3 = Number(prompt("Ingrese el tercer numero"));

if(n1 > n2 && n1 > n3) {
    console.log(`El numero mayor es: ${n1}`);
} else if (n2 > n1 && n2 > n3) {
    console.log(`El numero mayor es ${n2}`);
} else {
    console.log(`El numero mayor es: ${n3}`);
}
