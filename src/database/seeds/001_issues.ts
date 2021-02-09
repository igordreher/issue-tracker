import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('issues').del();

    await knex('issues').insert([
        { title: 'Example issue', details: 'Some detail' },
        { title: 'Another issue' }
    ]);
};
