const prompt = require("prompt-sync")();
num = 0
soma = 0
for (let i = 1; i <= 5; i++ ) {
    const num = parseFloat(prompt("Digite um número: "))
    soma = soma + num
}
media = soma/5
console.log("Soma dos números: " + soma)
console.log("Média dos números: " + media)