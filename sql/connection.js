const sql = require('mssql');
const sqlconfig = require('../config/sqlconfig');
var conexao;
console.log(`1${conexao}`);

module.exports = function connection() {
    console.log('executando o módulo connection');
    sql.connect(sqlconfig)

        .then(function (conn) {
            conexao = conn;
        })
        .catch(err => console.log(err));        
};
