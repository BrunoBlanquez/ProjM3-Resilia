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

async function selectDescription() {
    const conn = await connect();
    return await conn.query(`SELECT  steam.name, steam.positive_ratings, steam.developer, steam.publisher, steam_description_data.short_description, steam_media_data.*
    FROM steam_description_data
    INNER JOIN steam
    ON(appid = steam_appid) 
    INNER JOIN steam_media_data
    using(steam_appid);`);  
}

module.exports = {selectGames, selectDescription}


//const db = window.openDatabase()