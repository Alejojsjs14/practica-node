import { Sequelize } from 'sequelize'
import fs from 'node:fs'
import { DIALECT, POSTGRES_URL, TEMBO_CERTIFICATE } from './env.config.js'

const caCert = fs.readFileSync(TEMBO_CERTIFICATE, 'utf8')

export default new Sequelize(POSTGRES_URL, {
  dialect: DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      caCert: caCert.toString()
    }
  },
  define: {
    timestamps: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    underscored: true
  },
  logging: false
})
