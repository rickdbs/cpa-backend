import { Router } from "express";
import { PatientController } from "../controllers/PatientController.js";

const router = Router()
const patientsController = new PatientController()

router.get('/:cpf', patientsController.get)

router.post('/', patientsController.add)

router.patch('/', patientsController.insertData)

export default router