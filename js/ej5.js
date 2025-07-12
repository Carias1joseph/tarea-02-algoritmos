// Escriba un programa que pida una frase y escriba cuantas veces aparecen cada una de las vocales.

let frase = prompt("Escriba su frase: ");
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < frase.length ; i++) {
   if(frase[i].toLowerCase() === "a"){
      contadorA++;
   } else if(frase[i].toLowerCase() === "e") {
      contadorE++;
   }else if(frase[i].toLowerCase() === "i") {
      contadorI++;
   }else if(frase[i].toLowerCase() === "o") {
      contadorO++;
   }else if(frase[i].toLowerCase() === "u") {
      contadorU++;
   }

}

console.log(frase);
   console.log(`La vocal a aparece: ${contadorA} veces`);
   console.log(`La vocal e aparece: ${contadorE} veces`);
   console.log(`La vocal i aparece: ${contadorI} veces`);
   console.log(`La vocal o aparece: ${contadorO} veces`);
   console.log(`La vocal u aparece: ${contadorU} veces`);
   