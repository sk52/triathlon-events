const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('Should respond to GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})