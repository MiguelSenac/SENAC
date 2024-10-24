const prompt = require("prompt-sync")();
const numeroUm = prompt("Digite o número que você quer ver a tabuada: ")
const numeroDois = prompt("Digite o número que você quer ver outra tabuada: ")

console.log("TABUADA DO " + numeroUm)
for (let i = 1; i <= 10; i++) {
    let tabuadaUm = numeroUm * i
    let tabuadaDois = numeroDois * i
    console.log(i + " X " + numeroUm + " = " + tabuadaUm + "   " + i + " X " + numeroDois + " = " + tabuadaDois)
    
}