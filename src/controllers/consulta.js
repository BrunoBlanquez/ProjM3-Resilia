const cors = require('cors');
const express = require ('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    
    // SALVANDO O RETORNO DA QUERY EM UMA VARIAVEL
    async function testando(){
        const db = require('./../database/db');
        //console.log('select * from steam');
        const listaDeJogos =  await db.selectDescription();
        return res.json( listaDeJogos[0][0] )
    
    };
    
    testando();
    
    
});

app.listen('4567');


        
       


//testando()

 // listaDeJogos.forEach(jogos => {
        //     jogos.forEach( jogo =>{
        //         if( jogo.name == 'Counter-Strike' ){
        //             testando = jogo.name;
        //         }
        //     })    
        
        // });
// module.exports = {tabela} ;