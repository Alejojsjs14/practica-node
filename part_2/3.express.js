const express = require("express");
const ditto = require("./pokemon/dito.json");

const app = express();

const PORT = process.env.PORT ?? 1234;

// deshabilita la tecnologia usada ejem: express
app.disable("x-powered-by");

app.use(express.json());

// // Creando en un middleware
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   //Solo llegan reques post y que tienen headers de content type application JSON

//   let body = "";

//   // escuchar el evento data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     //mutar la request y meter la informacion en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Mi página</h1>");
});

app.post("/pokemon", (req, res) => {
  //req.body deberiamos guardar en bd
  res.status(201).json(req.body);
});

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json({
    message: "Data success",
    ditto,
  });
});

app.use((req, res) => {
  res.status(404).send("<h1>404 page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
