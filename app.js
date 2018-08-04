const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// app.get('/', (req, resp) => {
//     resp.send('Hello World!');
// });

// ejs sempre procura em uma pasta views
app.get('/ejs', (req, resp) => {
    resp.render("./hello-world");
});

app.listen(3000, () => {
    console.log('Escutando na porta 3000');
});