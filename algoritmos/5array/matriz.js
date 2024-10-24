const prompt = require("prompt-sync")();

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

    if (encontrarPais(nomePais) >= 0){
        console.log("O país " + nomePais + " já está na lista")
    }
    else{
        paises.push([nomePais,popPais])
    }    
}

function deletarPais(indice){
    
    if (indice != -1){
        paises.splice(indice,1)
    }
    
    else{
        console.log("O país que você digitou não foi encontrado")
    }
}

function encontrarPais(nomePais){
    let indice = -1
    for(let i = 0 ; i<paises.length; i++){
        if(paises[i][0] == (nomePais)){
           indice = i;
        }
    }
    return indice 
}


function menu(){
    console.log("=============================")
    console.log("[1] EXIBIR PAÍSES CADASTRADOS")
    console.log("[2] INSERIR PAÍS")
    console.log("[3] DELETAR PAÍS")
    console.log("[4] ENCONTRAR PAÍS")
    console.log("[5] SAIR")
    console.log("")


}

let opcao = true

while (opcao){

    menu()

    let escolha = prompt("Digite a opção desejada: ")
    
    switch(escolha){
        case "1":
            mostrarDados()
            break
        
        case "2":
            nomePais = prompt("Digite o nome do país: ")
            popPais = parseInt(prompt("Digite a população do país:"))
            inserirPais(nomePais, popPais)
            break

        case "3":
            nomePais = prompt("Digite o nome do país: ")
            deletarPais(encontrarPais(nomePais))
            break
            
        case "4":
            nomePais = prompt("Digite o nome do país: ")
            indice = encontrarPais(nomePais)
            if (indice === -1) {
                console.log("País não encontrado");
            } else {
                console.log("País encontrado no índice: " + indice);
            }
            break

        case "5":
            console.log("Você saiu")
            opcao = false
            break

        default:
            console.log("[ERRO] Digite uma opção válida")

    }       

}