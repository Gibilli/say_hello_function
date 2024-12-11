let nome = document.querySelector('input');
let button = document.querySelector('button');
let title = document.querySelector('h1');


function saluta(nome){
    title.innerHTML = `Ciao ${nome}`;
}

button.addEventListener('click', ()=>{
    saluta(nome.value);
});