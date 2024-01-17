const express = require('express');
const router = express.Router();
const validarHoraMiddleware = require('../middlewares/validarHora');

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido</h1>
        <p>La hora actual es ${req.horaActual}</p>
        <form action="/endroute" method="get">
            <button type="submit">Entrar</button>
        </form>
    `);
});

router.get('/endroute', validarHoraMiddleware, (req, res) => {
    res.send(`<h1>Ruta Final</h1><h3>¡Bienvenido a la ruta final!</h3>`);
});

router.use((req, res) => {
    res.status(400).send(`
        <h1>Bienvenido</h1>
        <p>La hora actual es ${req.horaActual}</p>
        <p>Aun no es la hora, espera hasta las 12:00:00 horas para entrar</p>
    `);
});

module.exports = router;
