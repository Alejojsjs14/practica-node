const { readFile } = require('node:fs/promises')
// Funcion autoinvocada
async function init () {
  console.log('leyendo el primer archivo')
  // callbacks funciones que se ejecutan cuando una tarea ha termiando
  const text = await readFile('part_1/archivo.txt', 'utf-8')
  console.log('primer text: ', text)

  console.log('haciendo cosas mientras lee')

  console.log('leyendo el segundo archivo')
  const secondText = await readFile('part_1/archivo2.txt', 'utf-8')
  console.log('segundo texto: ', secondText)
}
init()

// ;(
//   async () => {
//     console.log('leyendo el primer archivo')
//     // callbacks funciones que se ejecutan cuando una tarea ha termiando
//     const text = await readFile('part_1/archivo.txt', 'utf-8')
//     console.log('primer text: ', text)

//     console.log('haciendo cosas mientras lee')

//     console.log('leyendo el segundo archivo')
//     const secondText = await readFile('part_1/archivo2.txt', 'utf-8')
//     console.log('segundo texto: ', secondText)
//   }
// )()
