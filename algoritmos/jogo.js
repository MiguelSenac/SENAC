const prompt = require("prompt-sync")();
console.log("----------------------------") 
console.log("JOGO DO ÍMPAR OU PAR")
console.log("----------------------------")
console.log("")

console.log("----------------------------")
escolhaUsuario = prompt("Escolha PAR ou IMPAR: ")
escolha = escolhaUsuario.toUpperCase();

console.log("----------------------------")
console.log("")

if (escolha == "PAR" || escolha =="IMPAR"){

console.log("----------------------------")
num1 = parseInt(prompt("Digite um número de 1 a 11: "))
console.log("----------------------------")
console.log("")

num2 = parseInt (Math.floor(Math.random() * 11))
soma = num1 + num2

console.log("----------------------------")
console.log("Seu número: " + num1)
console.log("Número da máquina: " + num2)
console.log("Soma: " + soma)
console.log("----------------------------")
console.log("")

    if(num1 >= 0 && num1 <= 11) {
        if(
            (escolha === "PAR" && soma % 2 === 0) || 
            (escolha === "IMPAR" && soma % 2 !== 0)
        ) {
            console.log("----------------------------");
            console.log("Você ganhou!");
            console.log("----------------------------");
        } else {
            console.log("----------------------------");
            console.log("Você perdeu!");
            console.log("----------------------------");
        }
    } else {
        console.log("----------------------------");
        console.log("[ERRO] Apenas números de 0 a 11 são aceitos");
        console.log("----------------------------");
}}
else{
console.log("[ERRO] Escolha PAR ou IMPAR")
}


