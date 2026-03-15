const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema_ferias'
});

db.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar no MySQL:', erro);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = db;