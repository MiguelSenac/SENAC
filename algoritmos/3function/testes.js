function limparCPF(cpf) {
    return cpf.replaceAll('.', '').replaceAll('-', '').replaceAll(' ', '');
}
let cpf = "123..456.789+00";
let cpfLimpo = limparCPF(cpf);
console.log(cpfLimpo); 