const readline = require('readline-sync');
type alunos = {
    nome: string,
    idade: string,
    Rm: number,
    serie: string,
    cidade: string
};
let alunos: alunos[] = [
    {
        nome: 'Bruno',
        idade: '15 anos',
        Rm: 3636,
        serie: '9° ano',
        cidade: 'Severinia'
    },
];
function menu() {
    console.log("\n === Secretaria Educacional ===");
    console.log("1 - Criar usuario");
    console.log("2 - Listar usuarios");
    console.log("3 - Atualizar usuarios");
    console.log("4 - Deletar usuario");
    console.log("0 - Sair do programa");

}
function criarUsuario() {
    const nome = readline.question('Digite um nome: ');
    const idade = readline.questionInt('Digite a sua idade:');
    const serie = readline.question('Digite sua serie:');
    const cidade = readline.question('Digite sua Cidade:')
    const Rm = parseFloat(readline.question('Digite o seu Rm:'));

    alunos.push({ nome, idade, Rm, serie, cidade });
    console.log(`Aluno "${nome}" registrado com sucesso.`);
}

function listarUsuarios() {
    if (alunos.length === 0) {
        console.log("Nenhum usuario Cadastrado.");
        return;
    }
    console.log("\n --- Lista de usuarios ---");
    alunos.forEach((c, i) => {
        console.log(`${i + 1}. ${c.nome}`);
    });
}
function atualizarUsuario() {
    const nome = readline.question("nome que deseja atualizar:");
    const Rm = readline.question("RM:");
    const editar = readline.question("deseja edita-lo para qual nome?:")
    alunos.push({ nome, Rm });
    console.log("atualizado com sucesso!");
}


function deletarUsuario() {
    const nome = readline.question("Digite o usuario que deseja remover:");
    const index = alunos.findIndex(p => p.nome.toLowerCase() === nome.toLowerCase());
    console.log(index)
    if (index !== 0) {
        alunos.splice(index, 1);
        console.log("usuario removido com sucesso.")
        return;

    } else {
        console.log("usuario não encontrado.")
    }
    console.log("\n==== Usuarios ====");
    alunos.forEach((alunos,index) => {
        console.log(`${index + 1}. ${alunos.nome}`);
    });
    
}

let opcao
do {
    menu();
    opcao = readline.questionInt("Escolher uma opcao:");
    switch (opcao) {
        case 1:
            criarUsuario();
            break;

        case 2:
            listarUsuarios();
            break;

        case 3:
            atualizarUsuario();
            break;

        case 4:
            deletarUsuario();
            break;
        case 0:
            console.log("Encerrando o programa...");
            break;
        default:
            console.log("opção inválida!");
    }
}
while (opcao !== 0);
