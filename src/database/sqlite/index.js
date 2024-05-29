import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// you would have to import / invoke this in another file
export async function sqliteConnection () {
  const database = await open({
    filename: './src/database/database.db',
    driver: sqlite3.Database
  })

  return database
}