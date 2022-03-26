
const botao = $('#btn');
const painelDeJogos = $('#painelDeJogos');
const inputJogo = $('#nomeJogo');
const headerJogo = $('#headerJogo');
const tituloJogo = $('#tituloJogo');
const descricaoJogo = $('#descricaoJogo');

// const jogoDaPesquisa = $('#inputPesquisa')

// botao.on('click', async function() {  
//     buscaTabela();
// })


botao.on('click', function name(params) {
    let teste = '';
    const tabela = buscaTabela(teste); // then é pra pegar o valor da promise
    
    console.log('testando retorno da função', tabela);
})

async function buscaTabela(teste) {
    try {
        const response = await fetch('http://localhost:4567/'); 
        //return teste;   

        
        const data = await response.json();
        console.log()
        console.log(data);
        inputJogo.val(data.short_description);
        console.log(inputJogo.val())

        tituloJogo.html(data.name);
        headerJogo.attr('src', data.header_image);
        descricaoJogo.html(data.short_description);

        painelDeJogos.append(data[0]);
            // return data;
        }
        //return data;
    catch (error) {
        console.error('erro : ', error);
    }
}
