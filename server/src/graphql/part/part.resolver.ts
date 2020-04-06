import { IResolvers } from 'graphql-tools'
import { GraphQLResolveInfo } from 'graphql'
import { PartModel, PartType } from '../../models/Part.model'

const partResolver: IResolvers = {
  Query: {
    getParts: async (): Promise<any> => PartModel.find(),
    getPartsFromSubAssy: async (
      _: void,
      args: { parent: string },
      ctx: void,
      info: GraphQLResolveInfo,
    ): Promise<PartType | any[]> => {
      const parts = await PartModel.find({
        parent: args.parent,
      })

      return parts
    },
  },
  Mutation: {
    addPart: (
      _: null,
      args: { title: string },
      ctx: void,
      info: GraphQLResolveInfo,
    ): string => 'new part',
  },
}

export default partResolver
