const readline = require('readline-sync');
let n1:number = parseFloat(readline.question('Digite um numero:'));
if(n1 < 12){
    console.log('Criança')
}

else if(n1 >= 12 && n1<= 17)
    {console.log('Adolecente')
}

else if(n1 >= 18 && n1<= 59){
    console.log('Adulto')
}

else {
    console.log('Idoso')
}