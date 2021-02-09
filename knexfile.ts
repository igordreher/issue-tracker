// Update with your config settings.
export default {
  development: {
    client: 'pg',
    connection: {
      database: 'issue_tracker',
      user: 'postgres',
      password: '0000'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    }
  },
};
