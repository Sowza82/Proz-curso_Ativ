let titulo = document.querySelector("h2")
console.log(titulo)

titulo.style.color="blue"
titulo.style.fontSize="2.5rem"
//desafio:
//Usar a propriedade style manipulando 
//o  botão cor da borda de fundo


//Primeira interação do usuário
//Usuário ddigitou um nomee de usuário não válido
let loginUsuario= document.getElementById("login-usuario")
let errorTextUsuario =document.querySelector("error-text")

loginUsuario.classList.add("error")
errorTextUsuario.classList.add("visible")



//segunda interação do usuario
//Digitou um nome de usuário válido mais uma senha incorreta