const db = require('./dbConnection')

//=================================TRAZ INFORMAÇOES SOBRE O JOGO PARA MOSTRAR========================================
async function selectDescription(nome) {
    const conn = await db.connect();
    return await conn.query(`SELECT  steam.name, steam.positive_ratings, steam.release_date, steam.developer, steam.publisher, steam_media_data.*,  steam_description_data.short_description
    FROM steam
    INNER JOIN steam_media_data
    ON(appid = steam_appid)
    LEFT JOIN steam_description_data
    USING (steam_appid)
    HAVING steam.name = '${nome}';`);
}

//========================================TRAZ OS 5 MELHORES JOGOS GRATIS==================================
async function selectTop5Gratis() {
    const conn = await db.connect();
    return await conn.query(`SELECT steam.name, steam.price, steam.positive_ratings, steam_media_data.header_image
    FROM steam
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING price = 0 
    ORDER BY positive_ratings DESC LIMIT 5;`)
}

//========================================TRAZ UM RANKING DOS JOGOS MAIS NOVOS=============================
async function selectLancamento() {
    const conn = await db.connect();
    return await conn.query(`SELECT steam.name, steam.release_date, steam.positive_ratings, steam_media_data.header_image
    FROM steam 
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING release_date 
    BETWEEN '2018-01-01' AND '2023-01-01'
    ORDER BY positive_ratings DESC;`)
}

//=======================================USA O PREÇO COMO FILTRO=========================================
async function selectPorValor(valor) {
    const conn = await db.connect();
    return await conn.query(`SELECT steam.name, steam.price, steam_media_data.header_image
    FROM steam 
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING price = ${valor};`)
}

//================================TRAZ TODOS OS PREÇOS REGISTRADOS NA TABELA PRICE======================
async function selectPreco() {
    const conn = await db.connect();
    return await conn.query('SELECT count(price), price FROM steam GROUP BY price ORDER BY price;')
}

module.exports = {selectDescription, selectTop5Gratis, selectLancamento, selectPorValor, selectPreco}