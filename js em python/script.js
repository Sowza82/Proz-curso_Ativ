// Declaração das variáveis usando const e let
const username = "usuario";
let password = "senha";
const isAdmin = true; // Neste exemplo, o usuário é um administrador

// Nova variável para guardar a senha do usuário
let userPassword = "senha123";

// Nova variável para guardar se o usuário tem permissões de administrador ou não
const userIsAdmin = false; // Neste exemplo, o usuário não é um administrador

// Estrutura condicional para mudança de senha
if (username === "usuario" && password === "senha") {
    console.log("Por favor, insira sua nova senha");
} else {
    console.log("Username / senha incorretos");
}

// Estrutura condicional para permissões de administrador
if (isAdmin) {
    console.log("Bem-vindo(a) à área de administrador");
} else {
    console.log("Você não pode acessar esta parte do sistema");
}

// Estrutura condicional para mudança de senha com os novos valores
if (username === "usuario" && userPassword === "senha123") {
    console.log("Por favor, insira sua nova senha");
} else {
    console.log("Username / senha incorretos");
}

// Estrutura condicional para permissões de administrador com os novos valores
if (userIsAdmin) {
    console.log("Bem-vindo(a) à área de administrador");
} else {
    console.log("Você não pode acessar esta parte do sistema");
}
