import { IResolvers } from 'graphql-tools'
import { GraphQLResolveInfo } from 'graphql'
import { MaterialModel, MaterialType, MaterialMongooseType } from '../../models/Material.model'

const materialResolver: IResolvers = {
  Query: {
    getMaterials: async (): Promise<MaterialType[]> => {
      const materials = await MaterialModel.find()

      return materials
      // return [{ name: '6061 T6' }]
    },
    // getParts: async (): Promise<any> => {
    //   const parts = await PartModel.find()

    //   return parts
    // },
    // getPart: async (parent, args: { id: string}, context): Promise<any> => {
    //   if (!args.id) {
    //     throw new Error('No Id found.')
    //   }

    //   const part = await PartModel.findById(args.id)

    //   return part
    // },
  },
  Mutation: {
    addMaterial: async (_, args: {
      MaterialInput: {
        name: string;
      };
    }): Promise<{material: MaterialType}> => {
      const newMaterial = new MaterialModel({
        name: args.MaterialInput.name,
      })

      const res = await newMaterial.save()

      return {
        material: res,
      }
    },
    // addPart: async (
    //   _: null,
    //   args: { PartInput: {
    //     name: string;
    //     number: string;
    //     quantity: number;
    //     material: string;
    //     parent: string;
    //   }; },
    //   ctx: void,
    //   info: GraphQLResolveInfo,
    // ): Promise<{part: PartType}> => {
    //   const parent = await getParent(args.PartInput.parent)

    //   const newPart = new PartModel({
    //     _id: args.PartInput.number,
    //     name: args.PartInput.name,
    //     number: args.PartInput.number,
    //     quantity: args.PartInput.quantity,
    //     parent: parent ? args.PartInput.parent : null,
    //   } as PartType)

    //   if (parent) {
    //     if (!parent.children) {
    //       parent.children = []
    //     }
    //     if (!parent.children.includes(args.PartInput.number)) {
    //       parent.children.push(args.PartInput.number)
    //       await parent.save()
    //     }
    //   }

    //   const res = await newPart.save()
    //   return {
    //     part: res,
    //   }
    // },
  },
  // Part: {
  //   number: (row: PartType): string => row._id,
  //   parent: async (row: PartType): Promise<PartType | null> => {
  //     if (row.parent) {
  //       const parent = await PartModel.findById(row.parent)
  //       return parent
  //     }

  //     return null
  //   },
  //   children: async (row: PartType): Promise<PartType[] | null> => {
  //     if (row.children) {
  //       const children = await PartModel.find({
  //         _id: {
  //           $in: row.children,
  //         },
  //       })

  //       return children
  //     }

  //     return null
  //   },
  // },
}

export default materialResolver
