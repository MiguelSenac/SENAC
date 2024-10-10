
let num = 0;
let cont = 0; 

while (num <= 110) {
    if (num % 2 === 0) {
        cont = cont +1; 
    }
    num = num + 1; 
}

console.log("Quantidade de números pares é: " + cont);
