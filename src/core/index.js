import {buscaTabela,pegaTop5, pegaLancamentos, pegaFiltro, montaSelect} from './pegaTabelas.js';

const botao = $('#btn');
const inputJogo = $('#nomeJogo');

//==============================BUSCAR JOGO POR NOME=========================================================
// EVENTO DE CLIQUE
botao.on('click' , function (e) {
    buscaTabela(); 
})
//EVENTO DE ENTER
inputJogo.on('keypress', function(e) {
    e.which == 13 && buscaTabela() ;  
})
//===========================================================================================================

//========================FILTRANDO JOGO APÓS MUDANÇA NO SELECT==============================================
$('#valorJogo').on('change', function() {
    pegaFiltro($('#valorJogo').val());
})
//===========================================================================================================

//================================INSERINDO JOGOS NAS LISTAS=================================================
pegaTop5();
pegaLancamentos();
pegaFiltro(0);
//===========================================================================================================

//=================================INSERINDO VALORES NO SELECT===============================================
montaSelect();
//==========================================================================================================