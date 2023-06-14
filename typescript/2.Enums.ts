// ENUMS
enum VideoJuego {
  GAME = 'role',
  SIMULATOR = 'simulator',
}

interface Persona {
  name: string
  edad: number
  videojuegos: VideoJuego
}

const personaVideoJuego: Persona = {
  name: 'Cristian',
  edad: 38,
  videojuegos: VideoJuego.GAME,
}

// USING AS CONST
const LOG_LEVEL1 = {
  DEBUG: 'DEBUG',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
} as const

type ObjectValues<T> = T[keyof T]
type LogLevel1 = ObjectValues<typeof LOG_LEVEL1>

log('Hey', LOG_LEVEL1.DEBUG) // right
log('Hey', 'DEBUG') // right

// second
const LOG_LEVEL2 = {
  DEBUG: 'Debug',
  WARNING: 'Warning',
  ERROR: 'Error',
} as const

type LogLevel2 = keyof typeof LOG_LEVEL2

function log(message: string, level: LogLevel2) {
  console.log(`${LOG_LEVEL2[level]}: ${message}`)
}

log('Hey', 'DEBUG')
