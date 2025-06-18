const Readline = require("readline-sync");
let n: number  = parseFloat(Readline.question("Escolha um numero:"));
let v = true;


if(n<2){
    v=false
}
else{
    let i=2;
    while(i < n){
        if(n % i===0){
            v=false;
            break;
        }
        i++;
    }
}
console.log(`${n} ${v ? }`)