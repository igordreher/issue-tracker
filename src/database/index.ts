import knex from 'knex';
import knexfile from '../../knexfile';

const knexConfig = knex(knexfile.development);

export default knexConfig;