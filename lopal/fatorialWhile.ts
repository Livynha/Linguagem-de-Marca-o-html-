const readline = require("readline-sync")
let n: number = parseFloat(readline.question("escolha um numero:"))
let i= 1
let fator:number = 1
while(i <= n){
    fator = fator *(i)
    i++
}
console.log(fator)
