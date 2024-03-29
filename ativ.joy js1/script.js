document.addEventListener("DOMContentLoaded", function() {
    // Método simples para adicionar um título ao site
    const titulo = document.getElementById("titulo");
    titulo.innerText = "Bem-vindo à Loja Online";

    // Método complexo para adicionar um produto à venda
    const produtoDiv = document.getElementById("produto");
    const nomeProduto = document.createElement("h2");
    nomeProduto.innerText = "Computador Portátil";
    produtoDiv.appendChild(nomeProduto);

    const descricaoProduto = document.createElement("p");
    descricaoProduto.innerText = "Um computador portátil com alto desempenho e design elegante.";
    produtoDiv.appendChild(descricaoProduto);

    const precoProduto = document.createElement("p");
    precoProduto.innerText = "Preço: R$ 3.499,99";
    produtoDiv.appendChild(precoProduto);

    // Adicionando uma imagem do produto
    const imagemProduto = document.createElement("img");
    imagemProduto.src = "caminho/para/imagem.jpg";
    imagemProduto.alt = "Computador Portátil";
    produtoDiv.appendChild(imagemProduto);
});
