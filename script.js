function darContenidoCard(){

let titulo = document.getElementById ("tituloCard") 
titulo.innerText=  "¡Apresúrese!"

let textoCard = document.getElementById ("textoCard") 
textoCard.innerText=  "El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:"

let fechaActual = new Date;
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

let fecha = document.getElementById ("fecha") 
fecha.innerText=  (`${dia}/${mes + 1}/${anio}`)
}

darContenidoCard()