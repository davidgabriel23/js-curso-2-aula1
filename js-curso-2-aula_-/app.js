// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';


// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroScreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroScreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1 );
}