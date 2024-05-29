import { sqliteConnection } from '../index.js'
import { createPatients } from './createPatients.js'

export async function migrationsRun(){
    const schemas = [
      createPatients
    ].join('')
    
    sqliteConnection().then(db => db.exec(schemas)).catch(error => {
      console.error(error)
    })
}