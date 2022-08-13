'use strict';

const selectVagas = document.querySelector("#vaga");

/* AJAX 
Técnica de Comunicação e Transmissão de Dados */
fetch("http://localhost:3000/vagas")

/* Etapa 2)
... e então (then) capture a resposta da API no formato json */

.then( resposta => resposta.json())

/* Etapa 3)
... e então (then) capture os DADOS da resposta e faça o que quier com eles (console, colocar no HTML etc) */

.then( dados => {

    // Definindo um option vazio
    selectVagas.innerHTML = "<option></option>";
    
    for(let vaga of dados){
        let opcao = document.createElement("option");
        opcao.value = vaga.id;
        opcao.textContent = vaga.titulo;
        selectVagas.appendChild(opcao);
    }
});
