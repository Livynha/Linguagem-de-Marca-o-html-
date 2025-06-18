const readline = require("readline-sync")
let contas = [
    { nome: 'Livia' },
    { senha: '102030' },
    { numConta: '12345' },
    { saldo: 0 },
]
function criarconta() {
    const nome = readline.question('Digite seu nome:');
    const senha = readline.question('Digite sua senha:');
    const verificar = contas.find(c => c.numConta === numConta);
    const numConta = readline.question('Digite o número de sua conta:');
    const saldo = parseFloat(readline.question('Insira o valor:'));/*número*/

    if (senha.length < 5) {
        console.log("Senha invalida!")
        return;
    }
    if (verificar) { /* veficar se a conta ja foi cadastrada*/
        console.log(`conta ${numConta} Ja cadastrada`);
        return;
    }
    contas.push({ nome, senha, numConta, saldo });
    console.log(`conta${numConta}sucesso`);
}
function listarConta() {
    console.log("Lista de usuarios:")
    contas.forEach((contas, i) => {
        console.log(`${i + 1} - ${contas.nome}:${contas.numConta}`)
    })

}