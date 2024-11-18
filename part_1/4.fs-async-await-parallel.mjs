import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('part_1/archivo.txt', 'utf-8'),
  readFile('part_1/archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('primer text: ', text)
  console.log('segundo texto: ', secondText)
})
