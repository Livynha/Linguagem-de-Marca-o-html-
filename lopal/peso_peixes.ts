const readline = require ("readline-sync");
let peso_peixes=parseFloat(readline.question("qual o peso"))
if (peso_peixes > 50){
    let excesso: number = peso_peixes - 50;
    peso_peixes= excesso *4;
    console.log("você vai pagar:" + peso_peixes)
}

else{
    console.log("você pescou, peso_peixes ")
}