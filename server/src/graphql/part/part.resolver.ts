import { IResolvers } from 'graphql-tools';
import { GraphQLResolveInfo } from 'graphql';
import Part from '../../models/Part.model' 

// type Part = {
//   name: string;
//   number: string;
//   users: {
//     designer?: string;
//     manager?: string;
//     machinists?: [string];
//   };
//   status: 'inProgress' | 'notStarted' | 'done';
//   priority: 'high' | 'medium' | 'low';
// }

type addPartMutationInput = {
  title: string;
}

const partResolver: IResolvers = {
	Query: {
    getParts: async () => {
      return Part.find()
    },
  },
  Mutation: {
		// TODO: Figure out how to clean this up
    addPart: (_: null, args: addPartMutationInput, ctx: void, info: GraphQLResolveInfo) => {
      return 'new part'
    },
  },
}

export default partResolver