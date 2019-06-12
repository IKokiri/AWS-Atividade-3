const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamentoController')


router.post('/', controller.pagar);

module.exports = router;