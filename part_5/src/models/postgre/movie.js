import { DataTypes } from 'sequelize'
import { sequelize } from '../../utils/postgresql.config.js'

// Definiendo el modelo de la tabla movie (La tabla de la base de datos)
export const movie = sequelize.define(
  'movie',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      unique: true
    },
    rate: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'movie',
    timestamps: true
  }
)
console.log(movie === sequelize.models.movie)
