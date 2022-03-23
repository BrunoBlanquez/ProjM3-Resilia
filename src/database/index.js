//import consultar from "../controllers/consulta.js";
const botao = $('#btn')
const jogoDaPesquisa = $('#inputPesquisa')

botao.on('click', function() {  
    console.log(jogoDaPesquisa.val());





    
    consultar(jogoDaPesquisa.val());
})



const consultar = ( nomeDoJogo ) => {
    (async()=>{
        const db = require('./db');
        //console.log('select * from steam');

        const listaDeJogos = await db.selectGames();


        listaDeJogos.forEach(jogos => {
            jogos.forEach( jogo =>{
                if( jogo.name == nomeDoJogo ){
                    console.log(jogo);
                }
            })    
        
        });
    })();
}