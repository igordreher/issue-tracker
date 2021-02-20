module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      database: 'issue_tracker',
      user: 'postgres',
      password: 'postgres',
      port: '5432'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
