import { gql } from 'apollo-server'

const typeDefs = gql`
  extend type Query {
    getParts: [Part]!
    getPartsFromSubAssy(parent: String!): [Part]
  }

  type AddPartMutationPayload {
    part: Part
  }
  extend type Mutation {
    addPart(PartInput: PartInput): AddPartMutationPayload
    resetParts: String
  }

  input PartInput {
    name: String
    number: String
    quantity: Int
    material: String
    parent: String
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
    _id: String!
    name: String!
    number: String
    quantity: Int
    material: String
    status: PartStatus
    location: String
    parent: Part
    children: [Part!]
    # users: PartUsers
    # status: PartStatus
    # priority: PartPriority
  }
`

export default typeDefs
