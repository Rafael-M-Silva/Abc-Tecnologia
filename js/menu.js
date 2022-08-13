'use strict';

const menu = document.querySelector(".menu");
const botao = document.querySelector(".icone");

botao.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("aberto");
})