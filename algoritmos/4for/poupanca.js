let valorInicial = 1000
for (let i = 1; i <= 12; i++ ) {
    valorInicial = valorInicial + valorInicial*0.005
    console.log("Mês: " + i + " = " + valorInicial)
}
console.log("Total: " + valorInicial)