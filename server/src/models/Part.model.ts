import mongoose, { Document } from 'mongoose'

const partSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: String,
  },
  children: {
    type: [String],
  },
})

export interface PartType extends Document {
  name: string;
  number: string;
  parent: string | null;
  children?: string[];
}

const PartModel = mongoose.model('Part', partSchema)

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
