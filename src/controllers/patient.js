import getPatientByCpf from '../services/patient.js'
import { insertPatient } from '../services/patient.js'

export function getPatient (req, res) {
  const cpf = req.params.cpf
  

  try {
    if (cpf && Number(cpf)) {
      const patient = getPatientByCpf(cpf)
      res.send(patient)
    } else{
      res.status(422)
      res.send("CPF Inválido")
    }
  } catch (error){
    res.status(500)
    res.send(error.message)
  }
}

export function addPatient(req, res) {

  try {
    const newPatient = req.body

    if (req.body.cpf) {
      insertPatient(newPatient)
      res.status(201)
      res.send("Cadastro criado com sucesso")
    
    } else {
      req.status(422)
      req.send("O campo CPF é obrigatório")
    }

    
  } catch (error) {

    res.status(500)
    res.send(error.message)
  }

}




