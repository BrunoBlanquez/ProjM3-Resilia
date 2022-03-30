//CRIANDO CONEXÃO COM O BANCO

async function connect(){

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection('mysql://root:senhadobanco123@localhost:3306/steam');
    console.log('Conectou');
    global.connection = connection

    return connection;
}

connect();

// MANDANDO QUERY PRO BANCO PRA CONSEGUIR UM RETORNO
async function selectGames(){
    //let nome = 'PENELOPE'
    const conn = await connect();
    return await conn.query(`SELECT * FROM steam `);
}

async function selectDescription(nome) {
    const conn = await connect();
    return await conn.query(`SELECT  steam.name, steam.positive_ratings, steam.release_date, steam.developer, steam.publisher, steam_media_data.*,  steam_description_data.short_description
    FROM steam
    INNER JOIN steam_media_data
    ON(appid = steam_appid)
    LEFT JOIN steam_description_data
    USING (steam_appid)
    HAVING steam.name = '${nome}';`);
}

async function selectTop5Gratis() {
    const conn = await connect();
    return await conn.query(`SELECT steam.name, steam.price, steam.positive_ratings, steam_media_data.header_image
    FROM steam
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING price = 0 
    ORDER BY positive_ratings DESC LIMIT 5;`)
}

async function selectLancamento() {
    const conn = await connect();
    return await conn.query(`SELECT steam.name, steam.release_date, steam.positive_ratings, steam_media_data.header_image
    FROM steam 
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING release_date 
    BETWEEN '2018-01-01' AND '2023-01-01'
    ORDER BY positive_ratings DESC;`)
}

async function selectPorValor(valor) {
    const conn = await connect();
    return await conn.query(`SELECT steam.name, steam.price, steam_media_data.header_image
    FROM steam 
    INNER JOIN steam_media_data
    ON (appid = steam_appid )
    HAVING price = ${valor};`)
}

async function selectPreco() {
    const conn = await connect();
    return await conn.query('SELECT count(price), price FROM steam GROUP BY price ORDER BY price;')
}

module.exports = {selectGames, selectDescription, selectTop5Gratis, selectLancamento, selectPorValor, selectPreco}
