const z = require('zod')

const movieSchema = z.string({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'movie title is required'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'must be a valid url'
  }),
  genre: z.array(
    z.enum(['Action', 'Terror', 'Comedy', 'Drama']), {
      required_error: 'Movie genre is required'
    }
  )
})

function validateMovie (objec) {
  return movieSchema.safeParse(objec)
}

module.exports = {
  validateMovie
}
