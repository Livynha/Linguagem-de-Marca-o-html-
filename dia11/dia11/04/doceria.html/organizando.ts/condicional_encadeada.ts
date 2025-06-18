const realine = require('readline-sync')
let nota:number = parseFloat(realine.question("nota : "))

if(nota >=9) {
    console.log("excelente");
} else if(nota >= 7){
    console.log("bom");
} else if(nota >= 5){
    console.log("regular");
} else{
    console.log('precisa melhorar')
}