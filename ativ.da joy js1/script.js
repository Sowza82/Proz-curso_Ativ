document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo");
    const listaNaoOrdenada = document.querySelector("ul");
    const link = document.getElementById("link");
    const listaOrdenada = document.getElementById("lista-ordenada");

    // Adicionando conteúdo aos elementos
    titulo.innerText = "Título do Projeto";
    link.innerText = "Link para ProzEducação";

    // Adicionando itens à lista não ordenada
    listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

    // Adicionando itens à lista ordenada com links
    listaOrdenada.innerHTML = "<li><a href='https://example.com'>Link 1</a></li><li><a href='https://example.org'>Link 2</a></li><li><a href='https://example.net'>Link 3</a></li>";
});
