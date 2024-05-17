import { Router } from "express";
import getPatient  from '../controllers/patient.js'

const router = Router()

router.get('/:cpf', getPatient)

export default router