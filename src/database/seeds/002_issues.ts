import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('issues').del();

    // Inserts seed entries
    await knex('issues').insert([
        { title: 'Example issue', details: 'Some details', submitter_id: 1 },
        { title: 'Another issue', details: 'Some details', submitter_id: 2 },
    ]);
};
