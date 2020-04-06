import { gql } from 'apollo-server'

const typeDefs = gql`
  extend type Query {
    getParts: [Part]!
    getPartsFromSubAssy(parent: String!): [Part]
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
    # users: PartUsers
    # status: PartStatus
    # priority: PartPriority
  }
`

export default typeDefs
