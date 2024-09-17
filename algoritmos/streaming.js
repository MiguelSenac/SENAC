const prompt = require("prompt-sync")();

console.log("----------")
console.log("[BASICO]")
console.log("[PREMIUM]")
console.log("[FAMILIAR]")
console.log("----------")
console.log("")
console.log("--------------------------------------")
const plano  = prompt("Digite o plano que deseja: ")
console.log("--------------------------------------")
console.log("")

switch (plano) {
    case "BASICO":
        console.log("Com o plano basico você tem: Acesso a filmes em 480p, 1 tela.")
        break

    case "PREMIUM":
        console.log("Com o plano Premium você tem: Acesso a filmes em 1080p, 4 telas. ")
        break
       
    case "FAMILIAR":
        console.log("Com o plano Familiar você tem: Acesso a filmes em 4K, até 6 telas simultâneas.")
        break

    default:
        console.log("Escolha um plano válido.");
        break;
}