let catalogo = { produto: [] }

exports.get = (req, res, next) => {
    res.status(200).send(catalogo);
};


exports.getById = (req, res, next) => {

    for (c in catalogo.produto) {
        if (catalogo.produto[c].id == req.params.id) {
            res.status(204).send(catalogo.produto[c]);
        }
    
      }
};



exports.post = (req, res, next) => {

    
    catalogo.produto.push(req.body)

    res.status(201).send("OK");
};


exports.put = (req, res, next) => {

    for (c in catalogo.produto) {
        if (catalogo.produto[c].id == req.body.id) {
            catalogo.produto[c].produto = req.body.produto;
        }
    
      }
    
    res.status(200).send(`Pedido alterado com sucesso!`);
};

exports.delete = (req, res, next) => {
    
  for (c in catalogo.produto) {
    if (catalogo.produto[c].id == req.params.id) {
        catalogo.produto.splice(c, 1);
    }

  }

  res.status(200).send(`Produto removido com sucesso! ${req.body.id}`);
};