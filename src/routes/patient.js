import { Router } from "express";
import  { getPatient } from '../controllers/patient.js'
import { addPatient } from "../controllers/patient.js";

const router = Router()

router.get('/:cpf', getPatient)

router.post('/', addPatient)

export default router