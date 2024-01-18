const express = require('express');
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHoraMiddleware = require('./middlewares/validarHora');
const indexRoute = require('./routes/index');
const endRouteRouter = require('./routes/endroute');

app.use(horaMiddleware);
app.use('/endroute', validarHoraMiddleware, endRouteRouter);
app.use('/', indexRoute);

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});
