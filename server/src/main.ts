import express from 'express'
// import bodyParser from "body-parser"
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import cors from 'cors'
import { mongoConnect } from './connectivity'
import { partRouter } from './routers'
import schema from './schema'

/**
 * Initialize connection to mongodb early
 */
mongoConnect().then(() => {
  // eslint-disable-next-line no-console
  console.log('Mongo Connected!')
}).catch(() => {
  // eslint-disable-next-line no-console
  console.log('Mongo Connect failed')
})

/**
 * Intialize Apollo server.  Added schema.  Basic validation.
 * TODO: Explore options further.  Middleware?  Auth?
 */
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})

/**
 * Set up express server
 */
const app = express()
app.use('*', cors())
app.use(partRouter)
// app.use(compression())

server.applyMiddleware({
  app,
  path: '/graphql',
})

/**
 * Bind express app to port
 */
app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started listening to port ${process.env.SERVER_PORT}`)
})
