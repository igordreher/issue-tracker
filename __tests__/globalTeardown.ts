require('sucrase/register');
import connection from '../src/database';

export default async () => {
    await connection.destroy();
};
