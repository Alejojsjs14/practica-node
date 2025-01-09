import express, { json } from 'express'
import cors from 'cors'
import { moviesRouter } from './routes/movies.routes.js'

const app = express()
app.use(json())
app.use(cors({
  origin: (origin, callback) => {
    const ACEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:8081'
    ]

    if (ACEPTED_ORIGINS.includes(origin)) {
      callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))
app.disable('x-powered-by')

// Todo lo que sea movies se indetifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
