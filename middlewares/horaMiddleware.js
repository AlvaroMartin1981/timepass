const horaMiddleware = (req, res, next) => {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const formatedTime = `${hour}:${minutes}`
    req.dateType = formatedTime
    req.hour = hour
    next()
  }
  
  module.exports = horaMiddleware
  

/*const horaMiddleware = (req, res, next) => {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const formattedClock = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    req.horaActual = formattedClock;
    req.dataType = `Son las ${formattedClock}. Solicitud recibida: ${req.method} path: ${req.url}`;
    next();
};

module.exports = horaMiddleware;*/
