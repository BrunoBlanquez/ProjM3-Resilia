import {buscaTabela,pegaTop5, pegaLancamentos, pegaFiltro, montaSelect} from './pegaTabelas.js';

const botao = $('#btn');


// BUSCANDO POR NOME
botao.on('click', function () {
    buscaTabela(); 
    console.log($('#nomeJogo').val())
})

// FILTRANDO JOGO APÓS MUDANÇA NO SELECT
$('#valorJogo').on('change', function name(params) {
    pegaFiltro($('#valorJogo').val());
})

// INSERINDO JOGOS NAS LISTAS
pegaTop5();
pegaLancamentos();
pegaFiltro(0);

// INSERINDO VALORES NO SELECT
montaSelect();
