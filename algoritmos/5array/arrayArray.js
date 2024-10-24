let notas = [
    [8.5, 7.0, 9.0], // Notas do Aluno  1
    [6.5, 5.0, 10.0], // Notas do Aluno 2
    [7.5, 6.5, 9.0] // Notas do Aluno 3
] 

let medias = []

for (let i = 0; i < notas.length; i++){
    let soma = 0
    for(let j = 0; j < notas.length; j++){
        soma += notas[i][j];
    }

    let media = soma / notas[i].length
    medias.push(media)

}

console.log ("Média aluno 1: " + medias[0])
console.log ("Média aluno 2: " + medias[1])
console.log ("Média aluno 3: " + medias[2])