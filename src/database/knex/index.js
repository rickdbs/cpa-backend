import { knexfile as config }from '../../../knexfile'
import knex from 'knex'


export default connection = knex(config.development)