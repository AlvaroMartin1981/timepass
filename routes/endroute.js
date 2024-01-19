const express = require('express')
const router = express.Router()
const validarHora = require('../middlewares/validarHora')

router.get('/', validarHora, (req, res) => {
  res.send('<h1>Enhorabuena has conseguido las entradas de Taylor Swift</h1>')
})

module.exports = router


/*const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora')
router.get('/', (req, res) => {
    res.send(`
        <h1>Ruta Final</h1>
        <h3>¡Bienvenido a la ruta final!</h3>
    `);
});

module.exports = router;*/
