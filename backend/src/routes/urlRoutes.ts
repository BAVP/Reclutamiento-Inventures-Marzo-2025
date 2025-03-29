import express from "express"
export const urlRouter = express.Router()

// Get a single url
urlRouter.get("/:sufix", (req, res) => {
  res.json({data: "Hola Mundo!"})
})

urlRouter.get("/:sufix/clicks", (req, res) => {
  res.json({data: "Hola Mundo!"})
})

// Create a new url
urlRouter.post("/", (req, res) => {
  res.json({data: "Hola Mundo!"})
})
