const arrayProstagens =[
{
  titulo:"Pop Vegan" ,
  subtitulo:"Comida vegana para todos!" ,
  data:"06/07/2020",
  texto: "Restaurante em Consolação com comida vegana por kilo e rodizio de pizzas a noite,venha conferir!"
},
{
    titulo:"Pop Vegan" ,
    subtitulo:"Comida vegana para todos!" ,
    data:"18/07/2020",
    texto: "Restaurante em Consolação com comida vegana por kilo e rodizio de pizzas a noite,venha conferir!"
  },
  {
    titulo:"Pop Vegan" ,
    subtitulo:"Comida vegana para todos!" ,
    data:"23/07/2020",
    texto: "Restaurante em Consolação com comida vegana por kilo e rodizio de pizzas a noite,venha conferir!"
  } 

]
console.log(arrayProstagens[1] .titulo)



for( let i = 0; i < arrayProstagens .length; i ++ ){
 
    //criar um elemento
 let article = document.createElement("article")
 
 //console.log(article)

//manipular o elemento
article.innerHTML= `
<h3>${arrayProstagens[1] .titulo}</h3>
<p class="subtitulo">${arrayProstagens[1] .subtitulo}</p>
<div class="data">06/07/2022</div>
<p>Restaurante em Consolação com Comida
por kilo no almoço e rodízio de pizzas á noite,tudo
100% vegano. Vale muito a pena conhecer:)</p>
`
article.id="post-2"

//adicionar o elemento na página
let main = document.querySelector("main")
main.appendChild(article)

}

