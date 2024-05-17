import getPatientByCpf from '../services/patient.js'

function getPatient (req, res) {
  const cpf = req.params.cpf
  console.log("chegou aqui")

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


export default getPatient