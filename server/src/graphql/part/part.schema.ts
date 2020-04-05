import { gql } from 'apollo-server'

const typeDefs = gql`
	extend type Query {
		getParts: [Part]!
	}
  # type Mutation {
  #   addPart(title: String!) : String
  # }

  # TODO: Replace with user type
  # type PartUsers {
  #   designer: String
  #   manager: String
  #   machinists: [String]
  # }


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
    status: PartStatus
    priority: PartPriority
  }
`

export default typeDefs
