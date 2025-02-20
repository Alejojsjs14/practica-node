import express, { json } from 'express'
import { moviesRouter } from './routes/movies.routes.js'
import { corsMiddleware } from './middlewares/cors.js'

export const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// Todo lo que sea movies se indetifica con /movies
app.use('/movies', moviesRouter)
