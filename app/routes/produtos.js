module.exports = function (app) {
    console.log('chamando o /produtos');
    app.get('/produtos', (req, resp) => {
        resp.render('./produtos/produtos');
    });
};
