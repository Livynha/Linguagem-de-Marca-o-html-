const Readline = require("readline-sync")
let n: number  = parseFloat(Readline.question("Escolha um numero:"))
let i= 1
let par = 0
while(i<=n){
    if (i %2===0){
    console.log(i)
}
i++

}