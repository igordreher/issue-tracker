import app from 'app';
import request from 'supertest';
import connection from 'database';

describe('Issues', () => {
    it('Should create a issue', (done) => {
        request(app).post('/issues').send({
            title: 'Title',
            details: 'Details',
            submitter_id: 1
        }).expect(201, done);
    });

    it('Should get a list of issues with correct length', async (done) => {
        const result = await request(app).get('/issues');
        expect(result.body).toHaveLength(3);
        done();
    });

    afterAll(async (done) => {
        await connection.destroy();
        done();
    });
});