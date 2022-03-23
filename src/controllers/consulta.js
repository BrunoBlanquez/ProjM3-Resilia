const consultar = ( nomeDoJogo ) => {
    (async()=>{
        const db = require('./../database/db');
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

consultar('Counter-Strike')
//export default consultar;