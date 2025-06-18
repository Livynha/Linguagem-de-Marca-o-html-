const readline = require('readline-sync')
let n1:number = parseFloat(readline.question('Digite um numero:'));
let n2:number = parseFloat(readline.question('Digite outro numero:'));
let n3:number = parseFloat(readline.question('Digite outro numero:'));
console.log('seu resultado1 é:', n1 * 2 + n2 / 2);
console.log('sua resultado2 é:', n1 * 3 + n3);
console.log('sua resultado3 é:', n3 * n3 * n3);