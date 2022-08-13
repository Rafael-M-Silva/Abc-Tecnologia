'use strict';


//Usando o jQuery para acessar o DOM

/* const titulo = $('h1');
titulo.css("color", "darkblue");
titulo.text("Relação de candidatos") */


const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function(){
    
    /* Técnica Ajax para acesso a API */
    $.ajax({
        url: "http://localhost:3000/candidatos",
        dataType: "json",
        success: function(resposta){
// Iniciando a lista sempre vazia
            lista.html("");
/* Loop (laço de repetição) 
            Para cada (each) resposta obtida da API,
            extraia (através de uma função) o índice
            e o conteúdo. */

            $.each(resposta, function(indice, conteudo){
                lista.append(
                    `<li class="list-group-item">
                    ${conteudo.nome} - ${conteudo.vaga} - ${conteudo.email}
                    </li>`
                ).hide().slideDown();
            });
        }
    });
});