//````````````VALIDAÇÃO FORMÚLARIO I `````````//





// ````````````VALIDAÇÃO  USERNAME `````````//

//Mostrar popup no campo obrigatório

usernameInput.addEventListener("focus",function(){
    usernameLabel.classList.add("requered-popup")
})
//Ocultar popup no campo obrigatorio

usernameInput.addEventListener("blur", function(){
    usernameLabel.classList.remove("requered-popup")
})
//Validar  valor do imput

usernameInput.addEventListener("change", function(e){
  //  console.log(e.target.value)
  let valor=e.target.value
  if(valor.length< 3){

//valor incorreto
//console.log("o username precisa ter mais que 3 caracteres")
usernameInput.classList.remove("correct")
usernameInput.classList.add("error")
usernameHelper.innerText="o username precisa ter mais que 3 caracteres"
usernameHelper.classList.add("visible")
  }else{

    //valor correto
 //console.log("input válido")
 usernameInput.classList.remove("error")
 usernameInput.classList.add("correct")
 usernameHelper.classList.remove("visible")
  }
  
})

// ````````````VALIDAÇÃO DE EMAIL `````````//

let emailInput =document.getElementById("email");
let emailLabel =document.querySelector('label [for="email"]');
let emailHelper =document.getElementById("email-helper");


//Mostrar popup no campo obrigatório

emailInput.addEventListener("focus",function(){
emailLabel.classList.add("requered-popup")
})
//Ocultar popup no campo obrigatorio

emailInput.addEventListener("blur", function(){
emailLabel.classList.remove("requered-popup")
})

//mostrarPopup(emailInput , emailLabel)

//validar email
emailInput.addEventListener("change",function(e){
let valor= e.target.value
if(valor.incluides("@") && valor.incluides(".com") ){

//email valido
emailInput.classList.remove("error")
emailInput.classList.add("correct")
emailHelper.classList.remove("visible")

//console.log("Email valido")
}else{
//email invalido
emailInput.classList.remove("correct")
emailInput.classList.add("error")
emailHelper.innerText="o username precisa ter mais que 3 caracteres"
emailHelper.classList.add("visible")



//console.log("Email precisa conter um arroba e .com");
    }
})