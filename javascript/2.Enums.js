"use strict";
// ENUMS
var VideoJuego;
(function (VideoJuego) {
    VideoJuego["GAME"] = "role";
    VideoJuego["SIMULATOR"] = "simulator";
})(VideoJuego || (VideoJuego = {}));
const personaVideoJuego = {
    name: 'Cristian',
    edad: 38,
    videojuegos: VideoJuego.GAME,
};
// USING AS CONST
const LOG_LEVEL1 = {
    DEBUG: 'DEBUG',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
};
log('Hey', LOG_LEVEL1.DEBUG); // right
log('Hey', 'DEBUG'); // right
// second
const LOG_LEVEL2 = {
    DEBUG: 'Debug',
    WARNING: 'Warning',
    ERROR: 'Error',
};
function log(message, level) {
    console.log(`${LOG_LEVEL2[level]}: ${message}`);
}
log('Hey', 'DEBUG');
