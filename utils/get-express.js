function getExpress() {
    console.log('Enviando uma instância do express');
    var express = require('express');
    var app = express();
    return app;
};

module.exports = getExpress();
