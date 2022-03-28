const cors = require('cors');
const express = require ('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    // SALVANDO O RETORNO DA QUERY EM UMA VARIAVEL
    async function testando(){
        const db = require('../database/db');
        const listaDeJogos =  await db.selectDescription();
        return res.json( listaDeJogos );
    
    };
    testando();
});

app.get('/top5gratis', (req, res) => {
    async function pegaTop5() {
        const db = require('../database/db');
        const top5JogosGratis = await db.selectTop5Gratis();
        return res.json(top5JogosGratis);
    };

    pegaTop5();
})

app.get('/lancamentos', (req, res) => {
    async function pegaLancamentos() {
        const db = require('../database/db');
        const jogosLançamentos = await db.selectLancamento();
        return res.json(jogosLançamentos);
    }

    pegaLancamentos();
})

app.get('/filtrovalor/:id', (req, res) => {
    async function pegaFiltro(filtro) {
        const db = require('../database/db');
        const jogosFiltrados = await db.selectPorValor(filtro);
        return res.json(jogosFiltrados)
    }

    pegaFiltro(req.params.id);
})

app.get('/precos', (req, res) => {
    async function pegaPrecos() {
        const db = require('../database/db');
        const precos = await db.selectPreco();
        return res.json(precos);
    }

    pegaPrecos()
})

app.listen('3000');
