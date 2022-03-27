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
        return res.json( listaDeJogos )
    
    };
    
    testando();
    
    
});

app.listen('4567');

