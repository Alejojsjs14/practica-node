const http = require('node:http')
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 1234

const procesRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Charset', 'utf-8')
    res.end('<h1>Bienvenido a mi pagina de inicion<h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./Camon_20.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 internal server error<h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Charset', 'utf-8')
    res.end('<h1>Contacto<h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404<h1>')
  }
}

const server = http.createServer(procesRequest)

server.listen(desirePort, () => {
  console.log(`server listening on port http://localhost:${desirePort}`)
})
 
