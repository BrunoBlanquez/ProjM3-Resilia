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
            const response = await fetch('http://localhost:3000/'); 
            const data = await response.json();
            console.log(data);
             
        
            data.forEach(jogos => {
                jogos.forEach( jogo =>{
                    if( jogo.name.toLowerCase() == inputJogo.val().toLowerCase() ){
                        $('.informacoesJogo').css('display', 'flex')
                        tituloJogo.html(jogo.name);
                        headerJogo.attr('src', jogo.header_image);
                        descricaoJogo.html(jogo.short_description);

                        let screenshotsArray = Array.from(jogo.screenshots); // TRANSFORMA A INFO EM ARRAY
                        let arrayFiltro = screenshotsArray.filter( letra => letra !== '[' ).filter(letra => letra !== ']');// TIRA STRING QUE SÃO COLCHETES
                        let objeto = arrayFiltro.join('').split(',')[4]; // PEGA A INFO DA SCREEN QUE TA NA POSIÇÃO 4
                        let finalRetorno = objeto.replace("'path_thumbnail': ",'').replace("'",''); // TIRA TODOS OS CARACTERES DEIXANDO APENAS O LINK DA SCREENSHOT
            
                       
                        imagemScreenshot.attr('src', finalRetorno);
                        analisesPositivas.html(`POSITIVE RATINGS: ${jogo.positive_ratings}`);
                        desenvolvedor.html(`DEVELOPER: ${jogo.developer}`);
                        distribuidora.html(`PLUBISHER: ${jogo.publisher}`);
                        dataLançamento.html(`DATA LANÇAMENTO: ${jogo.release_date}`)

                        inputJogo.val('')
                    }
                })     
            });   
        }

    catch (error) {
        console.error('erro : ', error);
    }
}

function mostraJogo() {
    console.log('foi')
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

    console.log('dentro da função')
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
                $(`#preço${i}`).html(`R$ ${data[0][i].price}`);
            } else {
                $(`#imgFiltro${i}`).attr('src', '');
                $(`#tituloFiltro${i}`).html('');
                $(`#preço${i}`).html('');
            }
              
        }
        console.log(data[0][0])
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


export {buscaTabela, pegaTop5, pegaLancamentos, pegaFiltro, montaSelect, mostraJogo};