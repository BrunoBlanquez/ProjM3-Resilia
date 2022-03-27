const cors = require('cors');
const express = require ('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    // SALVANDO O RETORNO DA QUERY EM UMA VARIAVEL
    async function testando(){
        const db = require('./../database/db');
        const listaDeJogos =  await db.selectDescription();
        return res.json( listaDeJogos );
    
    };
    testando();
});

app.get('/top5gratis', (req, res) => {
    async function pegaTop5() {
        const db = require('./../database/db');
        const top5JogosGratis = await db.selectTop5Gratis();
        return res.json( top5JogosGratis );
    };

    pegaTop5();
})

app.listen('3000');

