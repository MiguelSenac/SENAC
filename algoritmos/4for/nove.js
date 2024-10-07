let count = 0;

for (let i = 1; i <= 49; i++) {
    let num = i.toString(); 
    let nove = num.search("9");
    if (nove != -1) {
        count++; 
    }
}

console.log("Quantidade de 9 = " + count);
