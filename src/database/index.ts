import knex from 'knex';
const knexfile = require('../../knexfile');

const knexConfig = knex(knexfile.development);

export default knexConfig;