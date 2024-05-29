export const createPatients = `CREATE TABLE IF NOT EXISTS patients (
    cpf CHAR(11) PRIMARY KEY NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    gender CHAR(5),
    bloodtype CHAR(3),
    medicines TEXT,
    illnesses TEXT,
    procedures TEXT,
    allergies TEXT,
    password VARCHAR(255) NOT NULL
);
`