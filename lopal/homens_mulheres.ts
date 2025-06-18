const readline = require('readline-sync')
let h: number= parseFloat(readline.question('Digite sua altura'));
let genero = readline.question("Digite M ou F")
if(genero=="M"){
    console.log("Peso ideal e:", (72.7*h)-58)
}
else if(genero=="F"){
    console.log("Peso ideal e:", (62.1*h)-44.7)
}
else{
    console.log("sexo nao definido")
}