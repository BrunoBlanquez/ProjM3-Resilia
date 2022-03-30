import {inputJogo, headerJogo, tituloJogo, descricaoJogo, imagemScreenshot, 
analisesPositivas, dataLançamento, 
desenvolvedor, distribuidora, apiUrl}  from './variaveis.js'; 


//TABELA COMPLETA DA STEAM

async function buscaTabela() {  
    const data = await consultaApi(`descricao/${inputJogo.val()}`);
    console.log(data);

    $('.informacoesJogo').css('display', 'flex')
    tituloJogo.html(data[0][0].name);
    headerJogo.attr('src', data[0][0].header_image);
    descricaoJogo.html(data[0][0].short_description);

    // TRATANDO URL DO SCREENSHOT
    let screenshotsArray = Array.from(data[0][0].screenshots); // TRANSFORMA A INFO EM ARRAY
    let arrayFiltro = screenshotsArray.filter( letra => letra !== '[' ).filter(letra => letra !== ']');// TIRA STRING QUE SÃO COLCHETES
    let objeto = arrayFiltro.join('').split(',')[4]; // PEGA A INFO DA SCREEN QUE TA NA POSIÇÃO 4
    let finalRetorno = objeto.replace("'path_thumbnail': ",'').replace("'",''); // TIRA TODOS OS CARACTERES DEIXANDO APENAS O LINK DA SCREENSHOT

    imagemScreenshot.attr('src', finalRetorno);

    analisesPositivas.html(`POSITIVE RATINGS: ${data[0][0].positive_ratings}`);
    desenvolvedor.html(`DEVELOPER: ${data[0][0].developer}`);
    distribuidora.html(`PLUBISHER: ${data[0][0].publisher}`);
    dataLançamento.html(`DATA LANÇAMENTO: ${data[0][0].release_date}`)

    inputJogo.val('')

}

// BUSCANDO TOP5
async function pegaTop5() {
    const data = await consultaApi('top5gratis');

    for (let i = 0; i < 5; i++) {
        $('#divTop5').append(`<div id="${data[0][i].name}"  class="fileira">
            <img id="imgJogoGratis0" src="${data[0][i].header_image}" alt="">
            <p id="tituloJogoGratis0">${data[0][i].name}</p>
        </div>`)
    }         
}

// BUSCANDO LANÇAMENTOS
async function pegaLancamentos() {
    const data = await consultaApi('lancamentos');

    for (let i = 0; i < 5; i++) {
        $('#divLancamentos').append(`<div class="fileira">
            <img id="imgJogoGratis0" src="${data[0][i].header_image}" alt="">
            <p id="tituloJogoGratis0">${data[0][i].name}</p>
        </div>`)
    } 
}

//TABELA FILTRADA
async function pegaFiltro(valor) {
        const data = await consultaApi(`filtrovalor/${valor}`);

        for (let i = 0; i < 5; i++) {
            if (data[0][i]) {
                $(`#imgFiltro${i}`).attr('src', data[0][i].header_image);
                $(`#tituloFiltro${i}`).html(data[0][i].name);
                $(`#preço${i}`).html(`$ ${data[0][i].price}`);
            } else {
                $(`#imgFiltro${i}`).attr('src', '');
                $(`#tituloFiltro${i}`).html('');
                $(`#preço${i}`).html('');
            }
              
        }
}

// MONTANDO O SELECT BUSCANDO VALOR DOS PREÇOS NO BANCO
async function montaSelect() {
    let data = await consultaApi('precos');

    for (let i = 0; i < data[0].length; i++) {
        $('#valorJogo').append(`<option value='${data[0][i].price}'>${data[0][i].price}</option>`);
    }       
}

// CONSULTA API USANDO APIURL (LOCALHOST:3000) E O CAMINHO DESEJADO
async function consultaApi(caminho) {
    try {
        const response = await fetch(apiUrl + caminho);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('erro', error);
    }
}

export {buscaTabela, pegaTop5, pegaLancamentos, pegaFiltro, montaSelect};