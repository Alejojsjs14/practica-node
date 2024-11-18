const fs = require('node:fs/promises')

console.log('leyendo el primer archivo')
// callbacks funciones que se ejecutan cuando una tarea ha termiando
fs.readFile('part_1/archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer  texto: ', text)
  })

console.log('haciendo cosas mientras lee')

console.log('leyendo el segundo archivo')
fs.readFile('part_1/archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto: ', text)
  })
