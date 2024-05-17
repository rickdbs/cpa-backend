import fs from 'fs'

export default function getPatientByCpf(cpf) {
  const patients = JSON.parse(fs.readFileSync("patients.json"))
  
  const filteredPatient = patients.filter(patient => patient.cpf === cpf)[0]
  return filteredPatient
}

