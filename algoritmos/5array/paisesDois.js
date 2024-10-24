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

let maior = [0][0]
let nomeDoMaior = [0][0]

let maiorOrdem = [0][0]


for (let i = 0; i < paises.length; i++){
    if (paises[i][1] > maior) {
        maior = paises[i][1];
        nomeDoMaior = paises[i][0];
    }
}

console.log("O país com maior populção é " + nomeDoMaior + " com " + maior + " habitantes")

paises.sort((a, b) => b[1] - a[1]);
console.table(paises)