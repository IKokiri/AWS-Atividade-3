const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        Atividade: "Atividade 3",
        Disciplina: "AWS"
    });
});

module.exports = router;