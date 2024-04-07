//   CAPTURA DO ELEMENTO DOM (VARIÁVEIS) //

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01= document.getElementById("btn-adicionar-produto-01")
let qtdProduto01 = document.getElementById("quantidade-produto-01")
let valorProduto01 = 11.66

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
// DEFINE E MANIPULAR OS ELEMENTOS CAPTURADOS(FUNÇÔES) //

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;
function adicionarUm(){
  // ADICIONAR  1 A QUANTIDADE DO PRODUTO//
qtdProduto01.value = Number (qtdProduto01.value) + 1

// ADICIONAR AO SUBTOTAL
subtotalInfo.quantidade = subtotalInfo.quantidade + 1
}

//ATUALIZAR O DOM //
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens"


//   DEFINIR QUANDO DEVEM SER MANIPULADOS OS ELEMENTOS (EVENTOS) //

btnAdicionarProduto01.addEventListener("click",adicionarUm)