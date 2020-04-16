import { IResolvers } from 'graphql-tools'
import { GraphQLResolveInfo } from 'graphql'
import { PartModel, PartType, PartMongooseType } from '../../models/Part.model'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getParent = async (parentId): Promise<PartMongooseType | undefined> => {
  if (!parentId) {
    return undefined
  }

  const parent = await PartModel.findById(parentId)

  if (!parent) {
    throw new Error('Parent not found.  Rejecting.')
  }
  return parent
}

const partResolver: IResolvers = {
  Query: {
    getParts: async (): Promise<any> => {
      const parts = await PartModel.find()

      return parts
    },
    getPartsFromSubAssy: async (
      _: void,
      args: { parent: string },
      ctx: void,
      info: GraphQLResolveInfo,
    ): Promise<PartType[]> => {
      const parts = await PartModel.find({
        parent: args.parent,
      })

      return parts
    },
  },
  Mutation: {
    addPart: async (
      _: null,
      args: { PartInput: {
        name: string;
        number: string;
        quantity: number;
        material: string;
        parent: string;
      }; },
      ctx: void,
      info: GraphQLResolveInfo,
    ): Promise<{part: PartType}> => {
      const parent = await getParent(args.PartInput.parent)

      const newPart = new PartModel({
        _id: args.PartInput.number,
        name: args.PartInput.name,
        number: args.PartInput.number,
        quantity: args.PartInput.quantity,
        parent: parent ? args.PartInput.parent : null,
      } as PartType)

      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        if (!parent.children.includes(args.PartInput.number)) {
          parent.children.push(args.PartInput.number)
          await parent.save()
        }
      }

      const res = await newPart.save()
      return {
        part: res,
      }
    },
  },
  Part: {
    number: (row: PartType): string => row._id,
    parent: async (row: PartType): Promise<PartType | null> => {
      if (row.parent) {
        const parent = await PartModel.findById(row.parent)
        return parent
      }

      return null
    },
    children: async (row: PartType): Promise<PartType[] | null> => {
      if (row.children) {
        const children = await PartModel.find({
          _id: {
            $in: row.children,
          },
        })

        return children
      }

      return null
    },
  },
}

export default partResolver
