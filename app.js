const app = require('./utils/get-express.js');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routerProdutos = require('./app/routes/produtos')(app);
const routerIndex = require('./app/routes/index')(app);
const routerClientes = require ('./app/routes/clientes')(app);
const routerClienteId = require ('./app/routes/cliente')

app.listen(3000, () => {
    console.log('Escutando na porta 3000');
});