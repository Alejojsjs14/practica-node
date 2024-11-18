const path = require('node:path')

// barra separadora de carpetas segun sistema op
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/hgfd/secret-key/passwords/password.txt')
console.log(base)

const fileName = path.basename('/tmp/hgfd/secret-key/passwords/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('image.jpg')
console.log(extension)
