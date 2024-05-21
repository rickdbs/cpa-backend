import fs from 'fs'
import { db } from '../database/db.js'

export default function getPatientByCpf(cpf) {
  const patients = JSON.parse(fs.readFileSync("patients.json"))
  
  const filteredPatient = patients.filter(patient => patient.cpf === cpf)[0]
  return filteredPatient
}

export function insertPatient(newPatient){

  const q = "INSERT INTO patients (cpf, email, password) VALUES (?)"

  const values = [
    newPatient.cpf,
    newPatient.email,
    newPatient.password
  ]

  db.query(q, [values], err => {
    if(err) return res.json(err)
  })

}

