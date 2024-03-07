var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Fornecedores', function(req, res, next) {
  res.send('Envio para todo tipo de loja.');
});

router.get('/Fornecedores/Produtos', function(req, res, next) {
  res.send('Aqui estão meus produtos');
});

router.get('/Fornecedores/Promocoes', function(req, res, next) {
  res.send('Aqui as promoções do dia.');
});

router.get('/Fornecedores/Listagem', function(req, res, next) {
  res.send('Aqui as listas de vendas.');
});

module.exports = router;
