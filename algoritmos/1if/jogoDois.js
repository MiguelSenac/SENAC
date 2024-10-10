const prompt = require("prompt-sync")();
console.log("----------------------------");
console.log("JOGO DO ÍMPAR OU PAR");
console.log("----------------------------");
console.log("");

console.log("----------------------------");
let escolhaUsuario = prompt("Escolha PAR ou IMPAR: ");
let escolha = escolhaUsuario.toUpperCase();

console.log("----------------------------");
console.log("");

if (escolha == "PAR" || escolha == "IMPAR") {

    console.log("----------------------------");
    let num1 = parseInt(prompt("Digite um número de 1 a 11: "));
    console.log("----------------------------");
    console.log("");

    let num2 = Math.floor(Math.random() * 11);
    let soma = num1 + num2;

    console.log("----------------------------");
    console.log("Seu número: " + num1);
    console.log("Número da máquina: " + num2);
    console.log("Soma: " + soma);
    console.log("----------------------------");
    console.log("");

    if (num1 >= 0 && num1 <= 11) {
        let resultado = (soma % 2 === 0) ? "PAR" : "IMPAR";
        console.log("A soma é " + resultado);
        console.log("----------------------------");
        if (
            (escolha === "PAR" && soma % 2 === 0) || 
            (escolha === "IMPAR" && soma % 2 !== 0)
        ) {
            console.log("Você ganhou!");
        } else {
            console.log("Você perdeu!");
        }
        console.log("----------------------------");
    } else {
        console.log("----------------------------");
        console.log("[ERRO] Apenas números de 0 a 11 são aceitos");
        console.log("----------------------------");
    }
} else {
    console.log("[ERRO] Escolha PAR ou IMPAR");
}
