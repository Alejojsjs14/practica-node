import { v4 as uuidv4 } from 'uuid'
import { sequelize } from '../utils/postgresql.config.js'
import { movie } from '../models/postgre/movie.js';

(async () => {
  try {
    await sequelize.sync({ force: true }) // Asegúrate de que la tabla esté sincronizada

    const seedData = [
      {
        id: uuidv4(),
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        duration: 148,
        poster: 'https://example.com/inception-poster.jpg',
        genre: ['Sci-Fi', 'Thriller'],
        rate: 8.8
      },
      {
        id: uuidv4(),
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: 175,
        poster: 'https://example.com/godfather-poster.jpg',
        genre: ['Crime', 'Drama'],
        rate: 9.2
      },
      {
        id: uuidv4(),
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: 152,
        poster: 'https://example.com/dark-knight-poster.jpg',
        genre: ['Action', 'Crime', 'Drama'],
        rate: 9.0
      }
    ]

    // Inserta los datos de ejemplo en la tabla
    await movie.bulkCreate(seedData)

    console.log('Datos de ejemplo insertados correctamente')
  } catch (error) {
    console.error('Error al insertar datos de ejemplo:', error)
  } finally {
    await sequelize.close() // Cierra la conexión a la base de datos
  }
})()
