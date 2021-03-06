import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('issues', table => {
        table.bigInteger('submitter_id').references('id').inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();

        table.bigInteger('assigned_id').references('id').inTable('users')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');

        table.dateTime('submit_date').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('issues', table => {
        table.dropColumns('submitter_id', 'assigned_id', 'submit_date');
    });
}

