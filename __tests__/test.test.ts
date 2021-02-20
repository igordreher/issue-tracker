import app from 'app';
import request from 'supertest';

describe('Users', () => {
    it('should get status 200 from /api/users', (done) => {
        request(app).get('/api/users')
            .expect(200, done);
    });
});