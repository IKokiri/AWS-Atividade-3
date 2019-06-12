let pedidos = { itensPedido: [] }

exports.get = (req, res, next) => {
    res.status(200).send(pedidos);
};


exports.post = (req, res, next) => {

    
    pedidos.itensPedido.push(req.body)

    res.status(201).send("OK");
};



exports.delete = (req, res, next) => {
    
  for (c in pedidos.itensPedido) {
    if (pedidos.itensPedido[c].id == req.params.id) {
        pedidos.itensPedido.splice(c, 1);
    }

  }

  res.status(200).send(`Pedido removido do pedido com sucesso! ${req.body.id}`);
};