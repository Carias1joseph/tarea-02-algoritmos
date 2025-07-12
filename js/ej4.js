// Escriba un programa que pida una frase y escriba cuántas veces aparece la letra "a"

let frase = prompt("Ingrese la frase: ");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
   if (frase[i].toLowerCase() === "a") {
      contador++;
   }
}

console.log(frase);

console.log("La letra 'a' aparece " + contador + " veces.");
