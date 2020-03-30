// import "graphql-import-node"
// import * as typeDefs from "./schema.graphql"
import { makeExecutableSchema } from "graphql-tools"
import resolvers from "../resolvers"
import { GraphQLSchema } from "graphql"
import { gql } from "apollo-server"

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
