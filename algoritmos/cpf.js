const prompt = require("prompt-sync")()

function formatCpf() {
return cpf.replaceAll(".", "").replaceAll("-", "")
}

const cpf = prompt("Digite seu CFP: ")
const cpfFormatado = formatCpf(cpf)
console.log(cpfFormatado)
