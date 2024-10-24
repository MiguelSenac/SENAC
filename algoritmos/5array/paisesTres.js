const prompt = require("prompt-sync")()

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
]


let adicionarMais = prompt("Você quer adicionar ou pesquisar países? (s/n): ")


while (adicionarMais == "s") {
    let escolha = prompt("Digite [1] para adicionar ou [2] para pesquisar")

    if(escolha == 1){
        let nomePais = prompt("Digite o nome do país: ")
    let populacao = prompt("Digite a população do país: ")

    paises.push([nomePais, populacao]);
    }

    else if (escolha == 2){
        let nomePaisProcurado = prompt("Digite o nome do país: ")
        for (let i = 0; i < paises.length; i++){
            if(paises[i], [0 == nomePaisProcurado]){
                console.log("O país pesquisado possui" + paises[i][1])
            }
        }

    }

    else{
        console.log("[ERRO] Opção valida")
    }
    
    adicionarMais = prompt("Você quer adicionar mais países? (s/n): ")
}

let maior = 0;
let nomeDoMaior = ""

for (let i = 0; i < paises.length; i++) {
    if (paises[i][1] > maior) {
        maior = paises[i][1]
        nomeDoMaior = paises[i][0]
    }
}

console.log("O país com maior população é " + nomeDoMaior + " com " + maior + " habitantes.");

paises.sort((a, b) => b[1] - a[1]);
console.table(paises);

function pesquisarPais() {
    const pais = prompt("Digite o nome do país: ");
    const index = paises.indexOf(pais);
    if (index !== -1) {
      console.log("País " + pais + " encontrado");
    } else {
      console.log("País não encontrado.");
    }
  }