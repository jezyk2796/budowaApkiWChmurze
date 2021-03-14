const request = require('supertest');
const app = require('../private/app');

describe('Test the root path', () => {
    test('it should response the GET method', async () => {
        try {
            const resp = await request(app).get('/');
            expect(resp.statusCode).toBe(200);
            expect(resp.text).toBe('Hello world');
        } catch (e) {
            throw e;
        }
    });
});
