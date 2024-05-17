import express from "express";
import router from './src/routes/patient.js'

const server = express()
server.use(express.json())

server.use("/patient", router)

const port = 8000

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

