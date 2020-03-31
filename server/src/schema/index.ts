import fs from "fs"
import path from "path"

import { makeExecutableSchema } from "graphql-tools"
import resolvers from "../resolvers"
import { GraphQLSchema } from "graphql"
import { gql } from "apollo-server"

const typeDefs = gql`
  type Query {
    helloWorld: String!
    parts: [Part]!
  }

  type Part {
    name: String!
  }
`

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
