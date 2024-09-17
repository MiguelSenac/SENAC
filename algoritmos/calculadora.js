const prompt = require("prompt-sync")();

console.log("-----------")
console.log("   [+]")
console.log("   [-]")
console.log("   [*]")
console.log("   [/]")
console.log("-----------")
const operacao = prompt("Digite o símbolo da operação desejada: ")

if (operacao == "+" || operacao == "-" ||operacao == "*" || operacao == "/") {
    const num1  = parseFloat (prompt("Digite o primeiro número: "))
    const num2  = parseFloat (prompt("Digite o segundo número: "))
    console.log("")

    adicao = num1 + num2
    subtracao = num1 - num2
    multiplicacao = num1 * num2
    divisao = num1 / num2 

    switch (operacao) {
        case "+":
            console.log("-----------------------------------")
            console.log(num1 + " + " + num2 + " = " + adicao )
            console.log("-----------------------------------")
            break

        case "-":
            console.log("--------------------------------------")
            console.log(num1 + " - " + num2 + " = " + subtracao )
            console.log("--------------------------------------")
            break
        
        case "*":
            console.log("------------------------------------------")
            console.log(num1 + " X " + num2 + " = " + multiplicacao )
            console.log("------------------------------------------")
            break

        case "/":
            if (num2 > 0){
                console.log("------------------------------------")
                console.log(num1 + " / " + num2 + " = " + divisao )
                console.log("------------------------------------")
            }
            else{
                console.log("--------------------------------------------")
                console.log("[ERRO] - o divisor não pode ser zero (0)")
                console.log("--------------------------------------------")
            break
    }}}
    
    else{
    console.log("-------------------------------------")
    console.log("[ERRO] símbolo da operação não existe")
    console.log("-------------------------------------")
    }