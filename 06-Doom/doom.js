const titulo = document.getElementById('titulo-principal');
console.log(titulo)

const pagina = document.querySelector('body');
console.log(pagina);

const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);

console.log("________________");
console.log(document.querySelector('h3'));

  // Modificando elementos
titulo.textContent = "Olá Mundo"
subtitulo[1].textContent = "Full Stack"

const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>"

// css via js 
titulo.style.textAlign ='center'; 
titulo.style.backgroundColor = 'linear-gradient(black, write)';