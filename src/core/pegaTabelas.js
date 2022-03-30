const painelDeJogos = $('#painelDeJogos');
const inputJogo = $('#nomeJogo');
const headerJogo = $('#headerJogo');
const tituloJogo = $('#tituloJogo');
const descricaoJogo = $('#descricaoJogo');

const imagemScreenshot = $('#imagemScreenshot');
const analisesPositivas = $('#analisesPositivas');
const dataLançamento = $('#dataLançamento');
const desenvolvedor = $('#desenvolvedor');
const distribuidora = $('#distribuidora');


//TABELA COMPLETA DA STEAM

async function buscaTabela() {
    try {
            const response = await fetch(`http://localhost:3000/descricao/${inputJogo.val()}`); 
            const data = await response.json();
            console.log(data);

            $('.informacoesJogo').css('display', 'flex')
            tituloJogo.html(data[0][0].name);
            headerJogo.attr('src', data[0][0].header_image);
            descricaoJogo.html(data[0][0].short_description);

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

    catch (error) {
        console.error('erro : ', error);
    }
}


// BUSCANDO TOP5
async function pegaTop5(params) {
    try {
        const response = await fetch('http://localhost:3000/top5gratis'); 
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < 5; i++) {
            $('#divTop5').append(`<div id="${data[0][i].name}"  class="fileira">
                <img id="imgJogoGratis0" src="${data[0][i].header_image}" alt="">
                <p id="tituloJogoGratis0">${data[0][i].name}</p>
            </div>`)
        }         
    }
    catch (error) {
        console.error('erro : ', error);
    }
}

// BUSCANDO LANÇAMENTOS
async function pegaLancamentos() {
    try {
        const response = await fetch('http://localhost:3000/lancamentos');
        const data = await response.json();

        for (let i = 0; i < 5; i++) {
            $('#divLancamentos').append(`<div class="fileira">
                <img id="imgJogoGratis0" src="${data[0][i].header_image}" alt="">
                <p id="tituloJogoGratis0">${data[0][i].name}</p>
            </div>`)
        }
    } catch (error) {
        console.error('erro : ', error);
    }
}

//TABELA FILTRADA
async function pegaFiltro(valor) {
    try {
        const response = await fetch(`http://localhost:3000/filtrovalor/${valor}`);
        const data = await response.json();

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
    } catch (error) {
        console.error('erro : ', error);
    }
}

// MONTANDO O SELECT
async function montaSelect() {
    try {
        const response = await fetch('http://localhost:3000/precos');
        const data = await response.json();

        for (let i = 0; i < data[0].length; i++) {
            $('#valorJogo').append(`<option value='${data[0][i].price}'>${data[0][i].price}</option>`);
        }

    } catch (error) {
        console.error('erro', error);
    }
}


export {buscaTabela, pegaTop5, pegaLancamentos, pegaFiltro, montaSelect};