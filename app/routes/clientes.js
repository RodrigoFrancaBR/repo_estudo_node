const connection = require('../../sql/connection');
console.log(connection);


connection();
console.log(connection);


function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}

module.exports = function (app) {
    app.get('/clientes', (req, res) => {
        execSQLQuery('SELECT * FROM Clientes', res);
    })
}