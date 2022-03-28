const botao = $('#btn');
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

// BUSCANDO POR NOME
botao.on('click', function () {
    buscaTabela(); 
})

async function buscaTabela() {
    try {
            const response = await fetch('http://localhost:3000/'); 
            const data = await response.json();
            console.log(data);
             
        
            data.forEach(jogos => {
                jogos.forEach( jogo =>{
                    if( jogo.name.toLowerCase() == inputJogo.val().toLowerCase() ){
                        tituloJogo.html(jogo.name);
                        headerJogo.attr('src', jogo.header_image);
                        descricaoJogo.html(jogo.short_description);

                        console.log(jogo.header_image)

                        let screenshotsArray = Array.from(jogo.screenshots); // TRANSFORMA A INFO EM ARRAY
                        let arrayFiltro = screenshotsArray.filter( letra => letra !== '[' ).filter(letra => letra !== ']');// TIRA STRING QUE SÃO COLCHETES
                        let objeto = arrayFiltro.join('').split(',')[4]; // PEGA A INFO DA SCREEN QUE TA NA POSIÇÃO 4
                        let finalRetorno = objeto.replace("'path_thumbnail': ",'').replace("'",''); // TIRA TODOS OS CARACTERES DEIXANDO APENAS O LINK DA SCREENSHOT
            
                        
                        console.log('teste', finalRetorno );

                        imagemScreenshot.attr('src', finalRetorno);
                        analisesPositivas.html(`POSITIVE RATINGS: ${jogo.positive_ratings}`);
                        desenvolvedor.html(`DEVELOPER: ${jogo.developer}`);
                        distribuidora.html(`PLUBISHER: ${jogo.publisher}`);

                        console.log(jogo)
                    }
                })     
            });   
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
            $(`#imgJogoGratis${i}`).attr('src', data[0][i].header_image);
            $(`#tituloJogoGratis${i}`).html(data[0][i].name); 
        }
        
    }

    catch (error) {
        console.error('erro : ', error);
    }
}
pegaTop5()

// BUSCANDO LANÇAMENTOS
async function pegaLancamentos() {
    try {
        const response = await fetch('http://localhost:3000/lancamentos');
        const data = await response.json();

        for (let i = 0; i < 5; i++) {
            $(`#imgLançamento${i}`).attr('src', data[0][i].header_image);
            $(`#tituloLançamento${i}`).html(data[0][i].name);
        }
    } catch (error) {
        console.error('erro : ', error);
    }
}


pegaLancamentos()


// VALOR FILTRADO
$('#valorJogo').on('change', function name(params) {
    pegaFiltro($('#valorJogo').val());
})

async function pegaFiltro(valor) {
    try {
        const response = await fetch(`http://localhost:3000/filtrovalor/${valor}`);
        const data = await response.json();

        for (let i = 0; i < 5; i++) {
            $(`#imgFiltro${i}`).attr('src', data[0][i].header_image);
            $(`#tituloFiltro${i}`).html(data[0][i].name);  
        }
        console.log(data[0][0])
    } catch (error) {
        console.error('erro : ', error);
    }
}



pegaFiltro(0)


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

montaSelect();