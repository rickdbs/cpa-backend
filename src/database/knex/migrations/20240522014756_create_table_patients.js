/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('patients', (table) => {
    table.string('cpf', 11).primary().notNullable()
    table.string('email').unique().notNullable()
    table.string('name')
    table.string('gender', 5)
    table.string('bloodtype', 3)
    table.string('medicines')
    table.string('illnesses')
    table.string('procedures')
    table.string('allergies')
    table.string('password').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('patients')

};
