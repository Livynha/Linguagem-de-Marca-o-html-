const readline = require('readline-sync');
let produto = [
    { nome: 'caixa de som', preco: 300.0 },
    { nome: 'fone de ouvido', preco: 220.0 },
    { nome: 'luminária', preco: 85.0 },
    { nome: 'projetor', preco: 500.0 },
    { nome: 'monitor gamer', preco: 500.0 },
];


function menu() {
    console.log("\n === Xing-Ling no terminal ===");
    console.log("1 - Adicionar Produtos");
    console.log("2 - Listar Produtos");
    console.log("3 - Bucar Produtos");
    console.log("4 - Remover Produto");
    console.log("0 - Sair");
}


function AdicionarProdutos() {
    const nome = readline.question("nome do produto que deseja adicionar:");
    const preco = parseFloat(readline.question("preço:"));
    produto.push({ nome, preco });
    console.log("produto Adicionado com sucesso!");
}


function listarProdutos() {
    if (produto.length === 0) {
        console.log("Nenhum Produto Cadastrado.");
        return;
    }
    console.log("\n --- Lista de Produtos ---");
    let total = 0;
    produto.forEach((p, i) => {
        console.log(`${i + 1}. ${p.nome} - R$ ${p.preco.toFixed(2)}`);
    });
}


function buscarProdutos() {
    const nome = readline.question("Digite um Produto que deseja buscar:");
    const produto = nome.find(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (produto) {
        console.log(`encontrado:${produto.nome}- R$ ${produto.preco.toFixed(2)}`);

    } else {
        console.log("Produto não encontrado.")
    }
}


function removerProduto() {
    const nome = readline.question("Digite o nome do produto que deseja remover:");
    const index = produto.findIndex(p => p.nome.toLowerCase() === nome.toLowerCase());
    console.log(index)
    if (index !== 0) {
        produto.splice(index, 1);
        console.log("produto removido com sucesso.")
        return;

    } else {
        console.log("produto não encontrado.")
    }
    
}

let opcao
do {
    menu();
    opcao = readline.questionInt("Escolher uma opção:");
    switch (opcao) {
        case 1:
            AdicionarProdutos();
            break;

        case 2:
            listarProdutos();
            break;

        case 3:
            buscarProdutos();
            break;

        case 4:
            removerProduto();
            break;

        case 0:
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("opção inválida!");
    }
}
while(opcao !==0);










