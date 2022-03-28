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


botao.on('click', function name(params) {
    const tabela = buscaTabela(); // then é pra pegar o valor da promise
    
    let obj = {
        id: 2,
        nome: 'matric'
    }
    
    console.log('testando retorno da função', tabela);
})

async function buscaTabela(teste) {
    try {
            const response = await fetch('http://localhost:4567/'); 
            const data = await response.json();
            //console.log(data[0][1]);
             
           

            data.forEach(jogos => {
                jogos.forEach( jogo =>{
                    if( jogo.name == inputJogo.val() ){
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
