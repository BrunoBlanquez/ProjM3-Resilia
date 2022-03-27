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

async function selectGames(){
    //let nome = 'PENELOPE'
    const conn = await connect();
    return await conn.query(`SELECT * FROM steam `);
}

module.exports = {selectGames}


//const db = window.openDatabase()