import express from "express";
import router from './src/routes/patient.js'
import { migrationsRun } from "./src/database/sqlite/migrations/index.js";
import cors from "cors";


const server = express()
server.use(cors({origin: "*"}))
server.use(express.json())
server.use("/patient", router)

migrationsRun()

const port = 8000

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

