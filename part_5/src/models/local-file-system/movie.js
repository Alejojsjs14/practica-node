import { randomUUID } from 'node:crypto'
import { readJSON } from '../../utils/createRequire.js'
const movies = readJSON('./src/movies.json')

export class MovieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      const filteredMovies = movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      )
      return filteredMovies
    }
    return movies
  }

  static async getById ({ id }) {
    const movie = movies.find((movie) => movie.id === id)
    return movie
  }

  static async cerate ({ input }) {
    // genera un nueva objeto con la data validada
    const newMovie = {
      id: randomUUID(),
      ...input // los trespuntos es para desestructurar el objeto
    }

    movies.push(newMovie)// agrega la nueva pelicula al array de peliculas

    return newMovie
  }

  static async delete ({ id }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)
    return true
  }

  static async update ({ id, input }) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }
    return movies[movieIndex]
  }
}
