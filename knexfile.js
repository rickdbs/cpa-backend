import path  from 'path'
import { fileURLToPath } from 'url';

// Obtenha o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
// Obtenha o diretório do arquivo atual
const __dirname = path.dirname(__filename);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },

    useNullAsDefault: true
  },

};
