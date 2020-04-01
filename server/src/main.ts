import express from 'express'
// import bodyParser from "body-parser"
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import cors from 'cors'
import connect from './connection'
import Part from './models/Part.model'
import schema from './schema'

connect().then(() => {
  console.log('Mongo Connected!')
}).catch(() => {
  console.log('Mongo Connect failed')
})

const app = express()

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})

app.use('*', cors())
// app.use(compression())
server.applyMiddleware({
  app,
  path: '/graphql',
})

// server.js
app.get('/parts', async (req, res) => {
  const parts = await Part.find()
  res.json(parts)
})
app.get('/part-create', async (req, res) => {
  const part = new Part({ name: 'Drive Shaft', number: '04-01-101' })
  await part.save().then(() => console.log('User created'))
  res.send('Part created \n')
})

app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started listening to port ${process.env.SERVER_PORT}`)
})
