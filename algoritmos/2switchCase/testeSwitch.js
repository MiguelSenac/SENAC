const prompt = require("prompt-sync")();

const fruta = prompt("Qual fruta deseja?: ")
switch(fruta){
    case "Laranja":
        console.log("A laranja está R$8,99 KG")
        break
    
    case "Bergamota":
        console.log("A Bergamota está R$ 2,00 KG")
        break

    case "Manga":
    case "Abacate":
        console.log("A manga e o abacate estão R$ 15,99 KG")
        break

    default:
        console.log("Desculpa mas não temos a fruta que você deseja")
}