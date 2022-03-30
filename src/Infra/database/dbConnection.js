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

module.exports = {connect}
