require('sucrase/register');
import connection from '../src/database';

export default async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
    await connection.seed.run();
};
