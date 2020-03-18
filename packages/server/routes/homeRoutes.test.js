const request = require('supertest');
const app = require('../app');

describe('Health check endpoint', () => {
    test('Should respond to /health with 200 status', () => {
        return request(app).get("/health").then(response =>  {
            expect(response.text).toBe("OK");
            expect(response.statusCode).toBe(200);
        });
    });
});

describe('Test the root path', () => {
    test('Should respond to GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200);
        });
    });
});