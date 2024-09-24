const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra: ")
const palavraModificada = palavra.replaceAll("a", "?") 
console.log("Palavra original: " + palavra + "\nPalavra modificada: " + palavraModificada)