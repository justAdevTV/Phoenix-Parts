import express from "express"
// import bodyParser from "body-parser"
import { ApolloServer } from "apollo-server-express"
import depthLimit from "graphql-depth-limit"
import schema from "./schema"
import cors from "cors"

const app = express()

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
})

const port = 8080
app.use("*", cors())
// app.use(compression())
server.applyMiddleware({
  app,
  path: "/graphql"
})

app.listen(port, () => {
  console.log(`Server started listening to port ${port}`)
})
// const port = 3000

// app.get("/", (req, res) => res.send("Hello World!"))

// app.listen(port, () => console.log(`Server started listening to port ${port}`))
