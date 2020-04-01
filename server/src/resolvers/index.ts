import { GraphQLResolveInfo } from 'graphql'
// import { Context } from "../models"
import { IResolvers } from 'graphql-tools'
import Part from '../models/Part.model'

type Part = {
  name: string;
  number: string;
  users: {
    designer?: string;
    manager?: string;
    machinists?: [string];
  };
  status: 'inProgress' | 'notStarted' | 'done';
  priority: 'high' | 'medium' | 'low';
}

const resolvers: IResolvers = {
  Query: {
    helloWorld(
      _: void,
      args: void,
      ctx: void,
      info: GraphQLResolveInfo,
    ): string {
      return '👋 Hello world! 👋'
    },
    async parts() {
      return Part.find()
    },
  },
}

export default resolvers
