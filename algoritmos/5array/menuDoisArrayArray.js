const paises = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
];

function mostrarDados(){
    console.table(paises)
}

function inserirPais(nomePais, popPais){
    if(encontrarPais(nomePais) == -1){
        paises.push([nomePais, popPais])
    } else {
        console.log("[ERRO] você digitou um país que já existe na lista")
    }
}

function deletarPais(indice){
    paises.splice(indice, 1)
}

function encontrarPais(nomePais){
    let indice = -1
    for(let i = 0; i < paises.length; i++){
        if(paises[i][0] === nomePais){
            indice = i;
        }
    }
    return indice
}

const prompt = require("prompt-sync")();

function menu (){
    console.log("      MENU")
    console.log("==================")
    console.log("[1] Mostrar países")
    console.log("[2] Inserir país")
    console.log("[3] Deletar país")
    console.log("[4] Encontrar país")
    console.log("[5] Sair")
    console.log("==================")
    console.log("")
}

let opcao = true;
let nomePais = ""

while (opcao) {
    menu();
    opcao = prompt("Digite a opção desejada: ");
   
    switch(opcao){
        case "1":
            mostrarDados()
            break

        case "2":
            nomePais = prompt("Digite o nome do país: ")
            let popPais = prompt("Digite a população do país: ")
            inserirPais(nomePais, popPais)
            break

        case "3":
            nomePais = prompt("Digite o nome do país: ")
            deletarPais(encontrarPais(nomePais))
            break
        
        case "4":
            nomePais = prompt("Digite o nome do país: ")
            console.log(encontrarPais(nomePais))
            break

        case "5":      
            console.log("Você saiu")
            opcao = false
            break

        default:
            console.log("[ERRO] Opção inválida")
            break
    }
}
