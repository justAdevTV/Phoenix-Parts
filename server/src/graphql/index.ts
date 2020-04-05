import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { gql } from 'apollo-server'
import resolvers from './resolvers'
import { partSchema } from './part'

const typeDefs = gql`
  type Query {
    helloWorld: String!
    parts: [Part]!
  }

  type Mutation {
    addPart(title: String!) : String
  }

  # TODO: Replace with user type
  type PartUsers {
    designer: String
    manager: String
    machinists: [String]
  }
`

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefs, partSchema],
  resolvers,
})

export { schema }

