const entrada = require ('readline-sync')

let primeiro_numero = parseFloat(entrada.question('digite o primeiro numero'));
let segundo_numero = parseFloat(entrada.question('digite o segundo numero'));
console.log(primeiro_numero + segundo_numero);
console.log(primeiro_numero - segundo_numero);
console.log(primeiro_numero * segundo_numero);
console.log(primeiro_numero / segundo_numero);