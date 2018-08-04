const app = require('./utils/get-express.js');
app.set('view engine', 'ejs');
app.set('views', './app/views');

const routerProdutos = require('./app/routes/produtos')(app);

// ejs sempre procura em uma pasta views
app.get('/ejs', (req, resp) => {
    resp.render("./hello-world");
});

app.listen(3000, () => {
    console.log('Escutando na porta 3000');
});