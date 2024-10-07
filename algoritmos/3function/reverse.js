const prompt = require("prompt-sync")();

function inverterString() {
    const palavra = prompt("Digite uma palavra: ");
    return palavra.split("").reverse().join("");
}

const invertida = inverterString();
console.log("Palavra invertida: " + invertida);
