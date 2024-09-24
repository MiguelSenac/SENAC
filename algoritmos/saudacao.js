

const prompt = require("prompt-sync")()
const nome = prompt("Digite seu nome: ")

function saudacao() {
    const horaAtual = new Date().getHours()

    let mensagem = ""

    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = "Bom dia, " + nome;
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = "Boa tarde, " + nome;
    } else {
        mensagem = "Boa noite, " + nome;
    }

    console.log(mensagem);
}


saudacao(nome); 
    
