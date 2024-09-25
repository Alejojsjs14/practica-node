const express = require('express')
const cors = require('cors')
const axios = require('axios')
const crypto = require('node:crypto')// ! crear ids
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()

app.use(express.json())

app.disable('x-powered-by')

// ? se traen los productos desde la melonn api
app.get('/inventory', async (req, res) => {
  try {
    res.header('Access-Control-Allow-Origin', '*')
    const apiKey = 'F2s1LfUMqP6fY5FwsaRKOEwRKCkdMiuIKGR9Np80'

    const response = await axios.get('https://kb5jdl3lek.execute-api.us-east-1.amazonaws.com/dev/api/logistics/inventory', {
      headers: {
        'X-Api-Key': apiKey
      }
    })

    res.json(response.data)
  } catch (error) {
    console.error('error al hacer la peticion: ', error)

    res.status(500).json({ message: 'error al obtener los datos del producto' })
  }
})

// ? todos los recursos que sean MOVIES se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // ? path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: result.error.message })
  }

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 1234

// ? se habilita el cors para el front
app.use(cors({ origin: 'http://localhost:3000' }))

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
