import app from 'app';
import connection from 'database';
import request from 'supertest';

describe('Users', () => {
    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
        await connection.seed.run();
    });

    it('Should create a new user', (done) => {
        request(app).post('/users').send({
            name: 'name',
            email: 'name@email.com'
        }).expect(201, done);
    });

    it('Should return 400 by trying to create user with existing email', (done) => {
        request(app).post('/users').send({
            name: 'name',
            email: 'name@email.com'
        }).expect(400, done);
    });

    it('Should return 400 by trying to create user without valid data', async (done) => {
        const result1 = await request(app).post('/users').send({
            name: 'name'
        });

        const result2 = await request(app).post('/users').send({
            name: 'name',
            email: 'notAnEmail'
        });

        expect(result1.status).toBe(400);
        expect(result2.status).toBe(400);
        done();
    });


    afterAll(async () => {
        await connection.destroy();
    });
});