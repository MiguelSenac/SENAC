const prompt = require("prompt-sync")()

const texto = prompt("Digite um texto: ")

console.log("-----------------------------")
console.log("[1] Exibir o tamanho do texto")
console.log("[2] Substituir um caractere: ")
console.log("-----------------------------")
console.log("")
console.log("---------------------------------")
const opcao = prompt("Escolha uma opção: [1] ou [2]: ");
console.log("---------------------------------")
console.log("")
switch (opcao) {
    case "1":
        const tamTexto = texto.length;
        console.log("--------------------------------------------------")
        console.log("O tamanho do texto é: " + tamTexto + " caracteres.")
        console.log("--------------------------------------------------")
        break;

    case "2":
        const caractereAntigo = prompt("Digite o caractere que deseja substituir: ")
        const novoCaractere = prompt("Digite o novo caractere: ")
        const textoAtualizado = texto.replaceAll(caractereAntigo, novoCaractere)
        console.log("------------------------------------")
        console.log("Texto atualizado: " + textoAtualizado)
        console.log("------------------------------------")
        break

    default:
        console.log("------------------------------")
        console.log("[ERRO] digite uma opção válida")
        console.log("------------------------------")
        break
}
