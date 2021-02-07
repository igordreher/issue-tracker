import * as Knex from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('issues', table => {
        table.increments('id').primary();
        table.string('title', 50);
        table.text('details');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('issues');
}

