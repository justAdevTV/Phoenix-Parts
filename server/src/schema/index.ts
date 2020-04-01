import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'
import { gql } from 'apollo-server'
import resolvers from '../resolvers'

const typeDefs = gql`
  type Query {
    helloWorld: String!
    parts: [Part]!
  }

  # TODO: Replace with user type
  type PartUsers {
    designer: String
    manager: String
    machinists: [String]
  }

  enum PartStatus {
    inProgress,
    notStarted,
    done
  }

  enum PartPriority {
    high
    medium
    low
  }

  type Part {
    name: String!
    number: String!
    users: PartUsers
    status: PartStatus
    priority: PartPriority
  }
`

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
