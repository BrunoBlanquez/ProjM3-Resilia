import {buscaTabela,pegaTop5, pegaLancamentos, pegaFiltro, montaSelect, mostraJogo} from './pegaTabelas.js';

const botao = $('#btn');


// BUSCANDO POR NOME
botao.on('click', function () {
    buscaTabela(); 
})


// VALOR FILTRADO
$('#valorJogo').on('change', function name(params) {
    pegaFiltro($('#valorJogo').val());
})

// INSERINDO JOGOS NAS LISTAS
pegaTop5();
pegaLancamentos();
pegaFiltro(0);

// INSERINDO VALORES NO SELECT
montaSelect();

//mostraJogo()



setTimeout(function(){
    console.log('liberado')
    $().on('click', function(event) {
    console.log(event)
})
},1000);

