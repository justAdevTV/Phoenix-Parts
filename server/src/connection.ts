import mongoose from 'mongoose'

export default async (): Promise<typeof mongoose> => mongoose.connect(process.env.MONGO_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
