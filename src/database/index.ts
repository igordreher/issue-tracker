import knex from 'knex';
import knexfile from '../../knexfile';

const database = process.env.NODE_ENV === 'test' ? 'test' : 'development';

const knexConfig = knex(knexfile[database]);

export default knexConfig;