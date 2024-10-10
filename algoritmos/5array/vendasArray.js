//3-Dada a seguinte lista de vendas (em reais), crie um código que encontre:    
//O maior valor vendido.
//A média dos valores vendidos.

let vendas = [250, 400, 150, 300, 600, 200, 550]
let maior = vendas[0]
let media = 0

for(let i = 0; i < vendas.length; i++){
    if (vendas [i] > maior)
        maior = vendas[i]

media += vendas[i] 
}
media = media / vendas.length  
console.log("Maior venda: R$" + maior)
console.log("Média: R$" + media)