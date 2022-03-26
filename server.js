const cors = require('cors');
const express = require ('express');
//const { default: testando } = require('./src/controllers/consulta');
const app = express();


app.use(cors());

app.get('/', (req, res) => {
    return res.json([
        {name: 'Matric'},
        {name: 'Nádia'},
        teste
    ])
});

app.listen('4567');