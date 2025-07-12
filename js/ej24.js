// 24



let cantidad = Number(prompt("¿Cuántos números aleatorios quieres?"));
let lista = [];


for (let i = 0; i < cantidad; i++) {
  let numero = Math.floor(Math.random() * 100);
  lista.push(numero);
}

console.log("Numeros:", lista);
