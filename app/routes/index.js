module.exports = function (app) {
    console.log('chamando o /');
    app.get('/ejs', (req, resp) => {
        resp.json({ message: 'Funcionando' });
        //resp.render('../app/index');
    });
};