const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
