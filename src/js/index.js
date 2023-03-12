/* 
    OBJETIVO - quando clicarmos no botão temos 
    que mostrar a imagem de fundo correspondente.

    -PASSO 1 - Dar um jeito de pegar o elemento HTML dos botoes

    -PASSO 2 - dar um jeito de identificar o clique do usuario no botão

    -PASSO 3 - desmarcar o botão selecionado anterior

    -PASSO 4 - marcar o botão clicado como se estivesse selecionado

    -PASSO 5 - esconder a imagem de fundo anterior

    -PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// PASSO 1 - Dar um jeito de pegar o elemento HTML dos botoes

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// PASSO 2 - dar um jeito de identificar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //PASSO 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //PASSO 4 - marcar o botão clicado como se estivesse selecionado

        selecionarBotaoCarrossel(botao);

        //PASSO 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();

        //PASSO 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostarImagemDeFundo(indice);


    });
});

function mostarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

