const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController')

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;