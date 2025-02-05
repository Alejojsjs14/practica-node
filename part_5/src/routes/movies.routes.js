import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'
import { MoviedbController } from '../controllers/moviesdb.js'

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getBiId)

moviesRouter.post('/', MovieController.create)

moviesRouter.delete('/:id', MovieController.delete)

moviesRouter.patch('/:id', MovieController.update)

moviesRouter.get('/db', MoviedbController.getFromBd)
