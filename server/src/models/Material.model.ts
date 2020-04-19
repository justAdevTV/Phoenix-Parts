import mongoose, { Schema, Document, Model } from 'mongoose'

const partSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
})

export interface MaterialType {
  _id?: string;
  name: string;
}

export type MaterialMongooseType = MaterialType & Document

const MaterialModel = mongoose.model<MaterialMongooseType>('Material', partSchema)

interface test extends Model<MaterialMongooseType> {
  new(doc: MaterialType): MaterialMongooseType;
}

export { MaterialModel }
