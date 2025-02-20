import { MovieModel } from '../models/local-file-system/movie.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    // El header de origin no se envia cuando la peticion se hace al mismo origen
    const { genre } = req.query
    const movies = await MovieModel.getAll({ genre })
    res.status(200).json(movies)
  }

  static async getBiId (req, res) {
    // path-to-regexp
    const { id } = req.params

    const movie = await MovieModel.getById({ id })
    if (movie) return res.status(200).json(movie)

    res.status(404).json({ error: 'Movie not found' })
  }

  static async create (req, res) {
    const result = validateMovie(req.body) // utiliza zod para validar los datos del body

    // devuelve un objeto con un array de errores
    if (result.error) {
      res.status(400).json({ error: result.error.errors })
    }

    const newMovie = await MovieModel.cerate({ input: result.data })

    res.status(201).json(newMovie)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await MovieModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  static async update (req, res) {
    const { id } = req.params
    const result = validatePartialMovie(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const updateMovie = await MovieModel.update({ id, input: result.data })

    return res.status(200).json(updateMovie)
  }
}
