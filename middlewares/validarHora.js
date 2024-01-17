const validarHoraMiddleware = (req, res, next) => {
    if (req.horaActual >= '12:00:00') {
        next();
    } else {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports = validarHoraMiddleware;
