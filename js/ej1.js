// Escriba un programa que pida dos numeros y escriba en la consola cual es el mayor.


let n1 = Number(prompt("Ingrese el primer numero"));
let n2 = Number(prompt("Ingrese el segundo numero"));

if(n1>n2) {
    console.log(`El numero mayor es: ${n1}`);
} else {
    console.log(`El numero mayor es ${n2}`);
}