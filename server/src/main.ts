import { Model } from "@shared/model"

let i = 0
setInterval(() => {
  i++
  const model = new Model()

  console.log(`Title: ${model.title} - ${i}`)
}, 1000)

// import express from "express"
// const app = express()
// const port = 3000

// app.get("/", (req, res) => res.send("Hello World!"))

// app.listen(port, () => console.log(`Server started listening to port ${port}`))
