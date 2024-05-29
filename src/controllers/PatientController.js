import { hash, compare } from "bcrypt";
import { sqliteConnection } from "../database/sqlite/index.js";
import AppError from "../utils/AppError.js";

export class PatientController {


  async get(req, res){
    const cpf = req.params.cpf
    const database = await sqliteConnection()

    const patient = await database.get(
      "SELECT * FROM patients WHERE cpf = (?)",
      [cpf]
    );

    if (!patient) {
      throw new AppError("Paciente não encontrado!");
    }

    return res.json(patient)
  }


  async add(req, res) {
    const { cpf, email, password } = req.body;
    const database = await sqliteConnection();

    const patientExists = await database.get(
      "SELECT * FROM patients WHERE cpf = (?)",
      [cpf]
    );

    if (patientExists) {
      throw new AppError("Paciente já cadastrado");
    }

    const hashedPassword = await hash(password, 8);

    await database.run(
      "INSERT INTO patients (cpf, email, password) VALUES (?, ?, ?)",
      [cpf, email, hashedPassword]
    );

    return res.status(200).json();
  }

  async insertData(req, res) {
    const {
      cpf,
      name,
      gender,
      bloodtype,
      medicines,
      illnesses,
      procedures,
      allergies,
    } = req.body;

    const database = await sqliteConnection();

    const patient = await database.get(
      "SELECT * FROM patients WHERE cpf = (?)",
      [cpf]
    );

    console.log("Passei aqui")

    if (!patient) {
      throw new AppError("Usuário não encontrado");
    }

    await database.run(`
      UPDATE patients SET
      name = ?,
      gender = ?,
      bloodtype = ?,
      medicines = ?,
      illnesses = ?,
      procedures = ?,
      allergies = ?
      WHERE cpf = ? 
    `,
      [
        name, 
        gender, 
        bloodtype, 
        medicines, 
        illnesses, 
        procedures,
        allergies,
        cpf
      ]
    );

    return res.status(200).json();
  }
}
