const prompt = require("prompt-sync")();
num = prompt("Digite um número: ")
soma = 0
for (let i = 1; i <= num; i++ ) {
    soma = i + soma
}
media = soma/num
console.log("Soma dos números: " + soma)
console.log("Média dos números: " + media)