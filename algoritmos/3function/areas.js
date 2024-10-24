//crie um algoritmo que  tenha tres funcoes que retornam calculos da area de uma figura: 1-um tringulo, 2- um quadrado, 3 - um retangulo

const prompt = require("prompt-sync")();
console.log("Escolha o objeto que deseja calcular a area: ")
console.log("1 - TRIÂNGULO ")
console.log("2 - QUADRADO ")
console.log("1 - RETÂNGULO ")
const objeto = prompt("Dígite o número do objeto: ")
const base = prompt("Dígite o tamanho da base: ")
const altura = prompt("Dígite o tamanho da altura do objeto: ")


function areaTriangulo(){
    const calculo = (base * altura / 2)
    console.log("A área do triângulo é: " +calculo)

}

function areaQuadrado(){
    const calculo = (base * altura)
    console.log("A área do quadrado é: " +calculo)

}

function areaRetangulo(){
    const calculo = (base * altura)
    console.log("A área do retângulo é: " +calculo)

}

switch (objeto) {
    case ("1"):
        areaTriangulo()
        break

    case ("2"):
        areaQuadrado()
        break

    case ("3"):
        areaRetangulo()
        break

    default:
        console.log("Digite uma opção válida: ")
}

