//Dado um array de números, escreva um programa que conte quantos números pares existem no array.[2, 5, 8, 11, 14, 17, 20]
let numeros = [2, 5, 8, 11, 14, 17, 20]
let cont = 0

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0)
        cont++
}
console.log(cont)
