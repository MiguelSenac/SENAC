let idade = 4;
let temCarteira = true;
let temMultas = true;
let podeAlugar;

if (idade < 18) {
  podeAlugar = false;
  return console.log("Você deve ter pelo menos 18 anos para alugar um carro.");
} else if (!temCarteira) {
  podeAlugar = false;
  return console.log("Você precisa de uma carteira de motorista para alugar um carro.");
} else if (temMultas) {
  podeAlugar = false;
  return console.log("Você tem multas pendentes. Resolva antes de alugar um carro.");
} else {
  podeAlugar = true;
  return console.log("Você pode alugar um carro.");
}
console.log("Status de permissão: " + podeAlugar);  // true ou false
