const sql = require('mssql');
const sqlconfig = require('../config/sqlconfig');

module.exports = function () {
    sql.connect(sqlconfig)
        .then(conn => global.conn = conn)
        .catch(err => console.log(err));
};