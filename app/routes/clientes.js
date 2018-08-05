const connection = require('../../sql/connection');
connection();
module.exports = function (app, connection) {    
    function execSQLQuery(sqlQry, res) {
        global.conn.request()
            .query(sqlQry)
            .then(result => res.json(result.recordset))
            .catch(err => res.json(err));
    }
    app.get('/clientes', (req, res) => {
        execSQLQuery('SELECT * FROM Clientes', res);
    })
}