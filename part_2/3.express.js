const express = require('express')
const ditto = require('./pokemon/dito.json')

const app = express()

const PORT = process.env.PORT ?? 3000
app.use(express.json())
/* app.use('/', (req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y headers application/json
  let body = ''

  // escuchando el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la info en el req.body
    req.body = data
    next()
  })
}) */

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('404 not found')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
