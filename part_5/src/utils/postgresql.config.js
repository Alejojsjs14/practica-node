import { Sequelize } from 'sequelize' // Importa la clase Sequelize para interactuar con la base de datos
import fs from 'node:fs'
import { DIALECT, POSTGRES_URL, TEMBO_CERTIFICATE } from './env.config.js'

// Lee el certificado CA desde el archivo especificado en TEMBO_CERTIFICATE
const cacert = fs.readFileSync(TEMBO_CERTIFICATE, 'utf8')

// Exporta una instancia de Sequelize configurada para conectarse a una base de datos PostgreSQL
export const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: DIALECT, // Especifica el dialecto de la base de datos (en este caso, PostgreSQL)
  dialectOptions: {
    ssl: {
      require: true, // Requiere conexión SSL
      rejectUnauthorized: false, // No rechaza conexiones no autorizadas
      ca: cacert.toString() // Usa el certificado CA leído del archivo
    }
  },
  define: {
    timestamps: true, // Habilita la creación automática de campos `createdAt` y `updatedAt`
    charset: 'utf8', // Establece el conjunto de caracteres a UTF-8
    collate: 'utf8_general_ci', // Establece la collation a UTF-8 general case insensitive
    underscored: true // Usa snake_case para los nombres de las columnas en la base de datos
  },
  logging: false // Desactiva el logging de las consultas SQL en la consola
})
