// Selecionando a logo da página
const logo = document.querySelector('header h1');

// Selecionando todos os elementos com a classe "post-autor"
const postAutores = document.querySelectorAll('.post-autor');

// Selecionando o segundo post
const post02 = document.querySelectorAll('.post')[1];

// Selecionando o formulário
const formulario = document.querySelector('form');

// Selecionando a section com ambos os posts
const sectionPosts = document.getElementById('posts');

// Selecionando as datas dos posts
const datasPosts = document.querySelectorAll('.post time');

// Selecionando os textos dos posts
const textosPosts = document.querySelectorAll('.post p');

// Selecionando as listas com links das redes sociais
const redesSociais = document.querySelectorAll('.redes-sociais ul');

// Selecionando o parágrafo contendo o texto do segundo post
const textoSegundoPost = post02.querySelector('p');

// Selecionando o link dentro do texto do primeiro post
const linkPrimeiroPost = document.querySelector('.post:first-of-type a');

// Selecionando a palavra em negrito dentro do texto do segundo post
const palavraNegritoSegundoPost = post02.querySelector('p strong');

// Selecionando o input de nome do formulário
const inputNomeFormulario = formulario.querySelector('input[name="nome"]');

// Selecionando os links da lista de redes no final da página
const linksRedesFooter = document.querySelectorAll('footer .redes-sociais a');

// Selecionando os links da navegação
const linksNavegacao = document.querySelectorAll('header nav a');

// Selecionando os "Autor:" e "Data:" em negrito nos dois posts
const autoresNegrito = document.querySelectorAll('.post-autor strong');
const datasNegrito = document.querySelectorAll('.post time strong');

// Função para imprimir a propriedade innerText de cada elemento de um NodeList
function imprimirInnerText(nodeList) {
    // Informa a quantidade de elementos da lista
    console.log(`A quantidade de elementos na lista é: ${nodeList.length}`);
    
    // Itera sobre cada elemento da NodeList e imprime o innerText
    nodeList.forEach(element => {
        console.log(element.innerText);
    });
}

// Exemplo de uso da função com uma NodeList
imprimirInnerText(postAutores); // Chama a função e passa a NodeList postAutores como argumento
