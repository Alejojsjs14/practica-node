const { text } = require('express')
const fs = require('node:fs')

console.log('leyendo el primer archivo')
// callbacks funciones que se ejecutan cuando una tarea ha termiando
fs.readFile('part_1/archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('haciendo cosas mientras lee')

console.log('leyendo el segundo archivo')
fs.readFile('part_1/archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})
