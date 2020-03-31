import { GraphQLResolveInfo } from 'graphql'
// import { Context } from "../models"
import { IResolvers } from 'graphql-tools'

type Part = {
  name: string;
  number: string;
  // users: {

  // }
}

const resolvers: IResolvers = {
  Query: {
    helloWorld(
      _: void,
      args: void,
      ctx: void,
      info: GraphQLResolveInfo,
    ): string {
      return `👋 Hello world! 👋`
    },
    parts(_: void, args: void, ctx: void, info: GraphQLResolveInfo): Part[] {
      return [
        {
          name: 'Drive Shaft',
          number: '04',
        },
      ]
    },
  },
}

export default resolvers
