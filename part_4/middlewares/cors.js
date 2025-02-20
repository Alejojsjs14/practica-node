import cors from 'cors'

const ACEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8081'
]

export const corsMiddleware = ({ aceptedOrigins = ACEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (aceptedOrigins.includes(origin)) {
      callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
