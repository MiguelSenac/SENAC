const prompt = require("prompt-sync")();

const data = prompt("Digite uma data com a mascara 00/00/0000: ")
const partes = data.split("/")
console.log("O ano em que você nasceu é: " + partes[2] + "?")
const validacao = prompt("Digite [S] ou [N]: ")
if (validacao == "S")
    console.log("Ano validado")
else 
    console.log("Ano invalidado")