import app from 'app';
import request from 'supertest';
import connection from 'database';

describe('Users', () => {
    it('Should create a new user', (done) => {
        request(app).post('/users').send({
            name: 'name',
            email: 'name@email.com'
        }).expect(201, done);
    });

    it('Should return 400 for creating user with existing email', (done) => {
        request(app).post('/users').send({
            name: 'name',
            email: 'name@email.com'
        }).expect(400, done);
    });

    it('Should return 400 for creating user with invalid data', async (done) => {
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

    it('Should return a list of users with correct length', async (done) => {
        const result = await request(app).get('/users');

        expect(result.body).toHaveLength(3);
        done();
    });

    it('Should return a filtered list of users with correct length', async (done) => {
        const result = await request(app).get('/users?name=ob');

        expect(result.body).toHaveLength(2);
        done();
    });

    it('Should return a specific user', async (done) => {
        const result = await request(app).get('/users/1');

        expect(result.body).toStrictEqual({ id: 1, name: 'Bob', email: 'bob@email.com' });
        done();
    });

    it('Should return 404 for user not found', (done) => {
        request(app).get('/users/9').expect(404, done);
        request(app).patch('/users/9').send({ name: 'Name' }).expect(404, done);
    });

    it('Should update a user', async (done) => {
        await request(app).patch('/users/1')
            .send({ name: 'new Name' });
        const updated = await request(app).get('/users/1');

        expect(updated.body).toHaveProperty('name', 'new Name');
        done();
    });

    it('Should return 400 for updating user without giving any data', (done) => {
        request(app).patch('/users/1').expect(400, done);
    });

    it('Should delete users', (done) => {
        request(app).delete('/users/1').expect(200, done);
        request(app).delete('/users/9').expect(200, done);
    });

    afterAll(async (done) => {
        await connection.destroy();
        done();
    });
});