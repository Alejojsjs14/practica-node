import { movie } from '../models/postgre/movie.js'

export class MoviedbController {
  static async getFromBd (req, res) {
    try {
      const movies = await movie.findAll()
      res.status(200).json(movies)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
