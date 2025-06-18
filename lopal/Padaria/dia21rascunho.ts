/*
case 1:
adicionarProduto();
break;

case 2:
listarProduto();
break;

case 3:
buscarProduto();
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


-------------------------------------------
function menu(){
c.l("opcao 1" )
c.l("opcao 2" )
c.l("opcao 3" )
c.l("opcao 4 ")
}
--------------------------------------------

let opcao;
do {
menu();
opcao = readline.questionInt("escolha uma opção")
}
--------------------------------------
function removerProduto(){
const nome = readline.question("Digite o nome do produto que deseja remover:");
const index = produtos.findIndex(p => p.nome.toLowerCase()=== nome.toLowerCase());
console.log(index)
if(index !== -1){
produtos.splice(index,1);
console.log("produto removido com sucesso.")
}else{
console.log("produto não encontrado.")}
}

-------------------------------------------
let opcao 
do{
menu();
opcao = readline.question("Escolher uma opção:");
switch(opcao){
case 1:
adicionarProduto();
break;

case 2:
listarProduto();
break;

case 3:
buscarProduto();
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
