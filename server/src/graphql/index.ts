import { makeExecutableSchema, IResolvers } from 'graphql-tools'
import { GraphQLSchema, GraphQLResolveInfo } from 'graphql'
import { gql } from 'apollo-server'
import { partSchema, partResolvers } from './part'
import { merge } from 'lodash'

const typeDefs = gql`
  type Query {
    helloWorld: String!
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

const resolvers: IResolvers = {
  Query: {
    helloWorld(
      _: void,
      args: void,
      ctx: void,
      info: GraphQLResolveInfo,
    ): string {
      return '👋 Hello world! 👋'
    }
  },
  // Mutation: {
	// 	// TODO: Figure out how to clean this up
  //   addPart: (_: null, args: addPartMutationInput, ctx: void, info: GraphQLResolveInfo) => {
  //     return 'new part'
  //   },
  // },
}

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefs, partSchema],
  resolvers: merge(resolvers, partResolvers),
})

export { schema }

