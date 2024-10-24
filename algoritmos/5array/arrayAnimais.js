//Encontre a  palavra mais longa usando for. Use o let lista = ['peixe', 'elefante', 'gato']
let animais = ['peixe', 'elefante', 'gato']
let animaisMaior = animais[0] 
let animaisMenor = animais[0]
for(let i = 0; i < animais.length; i++){
    if(animais[i].length > animaisMaior.length)
        animaisMaior = animais[i] 

    if(animais[i].length < animaisMenor.length)
        animaisMenor = animais[i] 
}
console.log(animaisMaior)
console.log(animaisMenor)