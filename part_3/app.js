const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by')

// Todo lo que sea movies se indetifica con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }

  res.status(200).json(movies)
})

// recuperar peliculas por id
app.get('/movies/:id', (req, res) => {
  // path-to-regexp
  const { id } = req.params

  const movie = movies.find((movie) => movie.id === id)
  if (movie) return res.status(200).json(movie)

  res.status(404).json({ error: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body) // utiliza zod para validar los datos del body

  // devuelve un objeto con un array de errores
  if (result.error) {
    res.status(400).json({ error: result.error.errors })
  }

  // genera un nueva objeto con la data validada
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data // los trespuntos es para desestructurar el objeto
  }

  movies.push(newMovie)// agrega la nueva pelicula al array de peliculas

  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const { id } = req.params

  
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
