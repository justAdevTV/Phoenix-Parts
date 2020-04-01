import mongoose from 'mongoose'

const partSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
})

const Part = mongoose.model('Part', partSchema)

export default Part
