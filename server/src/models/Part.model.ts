import mongoose, { Schema, Document } from 'mongoose'

const partSchema: Schema = new mongoose.Schema({
  // This is the part number.  Unique and how we uniquely
  // identify a part.  This is best so that I can easily
  // add parts as refs

  _id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  // number: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  quantity: {
    type: Number,
    default: 1,
  },
  material: {
    type: String,
  },
  status: {
    type: String,
  },
  parent: {
    type: String,
  },
  children: {
    type: [String],
  },
})

export interface PartType {
  _id: string;
  name: string;
  number: string;
  quantity: number;
  parent?: string | null;
  children?: string[];
}

export type PartMongooseType = PartType & Document

const PartModel = mongoose.model<PartMongooseType>('Part', partSchema)

export { PartModel }

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
