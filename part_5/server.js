import { app } from './src/app.js'
import { sequelize } from './src/utils/postgresql.config.js'
import { PORT } from './src/utils/env.config.js';

// Función autoejecutable asincrónica
(async () => {
  try {
    // Sincroniza el modelo con la base de datos (valida que la base de datos si este corriendo)
    await sequelize.sync()
    console.log(
      'Connection to the database has been established successfully.'
    )

    app.listen(PORT ?? 3000, () => {
      console.log(`server listening on port http://localhost:${PORT}`)
    })
  } catch (error) {
    // Muestra cualquier error en la consola y termina el proceso con un código de error
    console.error(error)
    process.exit(1)
  }
})()
