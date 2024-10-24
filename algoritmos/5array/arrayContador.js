//['casa', 'café', 'livro',’senac’,’programador’]
//Faça um algoritmo que mostre cada palavra deste conjuntode dados. Ao lado de cada palavra mostre a quantidade de letras que ela tem
let cont = 0
let coisas = ["casa", "café", "livro", "senac", "programador"]
for(let i = 0; i < coisas.length; i++){
    console.log(coisas[i] + " possui " + coisas[i].length + " letras.")
    cont += coisas[i].length

    
}
console.log("Total de caracteres: " + cont)