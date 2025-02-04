import { app } from './src/app.js'
import sequelize from './src/utils/postgresql.config.js'
import { PORT } from './src/utils/env.config.js'

const port = PORT ?? 1234(
  async () => {
    try {
      await sequelize.sync()
      console.log('Connection to the database has been established successfully.')

      app.listen(port, () => {
        console.log(`server listening on port http://localhost:${PORT}`)
      })
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })
