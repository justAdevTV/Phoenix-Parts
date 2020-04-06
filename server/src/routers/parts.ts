import express from 'express'
import { PartModel } from '../models/Part.model'

const router = express.Router()

// server.js
router.get('/parts', async (req, res) => {
  const parts = await PartModel.find()
  res.json(parts)
})
router.get('/part-create', async (req, res) => {
  const part = new PartModel({ name: 'Drive Shaft', number: '04-01-101' })
  await part.save().then(() => console.log('User created'))
  res.send('Part created \n')
})

export default router
