
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const pedidoRoute = require('./routes/pedidoRoute');
const produtoRoute = require('./routes/produtoRoute');
const pagamentoRoute = require('./routes/pagamentoRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);

app.use('/pedido', pedidoRoute);
app.use('/produto', produtoRoute);
app.use('/pagamento', pagamentoRoute);

module.exports = app;
