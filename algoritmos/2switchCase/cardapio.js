console.log("-------------------------")
console.log("           MENU")
console.log("-------------------------")

console.log("-------------------------")
console.log("         COMIDAS")
console.log("1 - Pizza        R$ 20,00")
console.log("2 - Hamburguer   R$ 15,00")
console.log("3 - Lasanha      R$ 25,00")
console.log("4 - Strogonoff   R$ 30,00")
console.log("-------------------------")
console.log("         BEBIDAS")
console.log("5 - Coca Cola    R$ 10,00")
console.log("6 - Água         R$ 05,00")
console.log("7 - Limonada     R$ 07,00")
console.log("-------------------------")

const prompt = require("prompt-sync")();
console.log("-------------------------")
const comida  = prompt("Digite o número da comida que deseja: ")
const bebida  = prompt("Digite o número da bebida que deseja: ")
console.log("-------------------------")
console.log("")

console.log("-------------------------")
let nomeComida = ""
let nomeBebida = ""
let precoComida = 0
let precoBebida = 0


switch (comida) {
    case "1":
        nomeComida = "Pizza"
        precoComida = 20.00
        break

    case "2":
        nomeComida = "Hamburguer"
        precoComida = 15.00
        break

    case "3":
        nomeComida = "Lasanha"
        precoComida = 25.00
        break

    case "4":
        nomeComida = "Strogonoff"
        precoComida = 30.00
        break
    default:
        console.log("Escolha de comida inválida.");
        break;
}

switch (bebida) {
    case "5":
        nomeBebida = "Coca Cola"
        precoBebida = 10.00
        break 

    case "6":
        nomeBebida = "Água" 
        precoBebida = 5.00
        break

    case "7":
        nomeBebida = "Limonada" 
        precoBebida = 7.00
        break
    default:
        console.log("Escolha de bebida inválida.");
        break;
}

const total = precoBebida + precoComida

if(nomeComida && nomeBebida){
    console.log("Você escolheu: " + nomeComida + " e " + nomeBebida)
    console.log("Valor total da conta: R$" +total)
}
    else
("[ERRO] Pedido incompleto. Tente novamente.")


