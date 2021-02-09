import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('users').del();

    // Inserts seed entries
    await knex('users').insert([
        { name: 'Bob', email: 'bob@email.com' },
        { name: 'Rob', email: 'rob@email.com' },
    ]);
};
