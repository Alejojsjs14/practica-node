const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})

app.post('/pokemon', (req, res) => {
  let body = "";

  // escuchar el evento data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    res.writeHead(201, {
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify(data));
  });

})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})