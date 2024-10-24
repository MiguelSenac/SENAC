let notas = [
    [8.5, 7.0, 9.0], // Notas do Aluno  1
    [6.5, 5.0, 10.0], // Notas do Aluno 2
    [7.5, 6.5, 9.0], // Notas do Aluno 3
    [7.5, 6.5, 9.0]
] 

let medias = []

for (let array = 0; array < notas.length; array++){

    let soma = 0

    for(let nota = 0; nota < notas[array].length; nota++){
        soma = soma + notas[array] [nota]
    }
    
    
    let media = soma/notas[array].length 
    medias.push(media)
}

console.log(medias)