const request = require('supertest');
const app = require('../../app');

describe('health check endpoint...', () => {
    test('...should respond with 200 status', () => {
        return request(app).get("/health").then(response =>  {
            expect(response.text).toBe("OK");
            expect(response.statusCode).toBe(200);
        });
    });
});

describe('root path endpoint...', () => {
    test('...should respond with 200 status', () => {
        return request(app).get("/").then(response => {
            expect(response.text).toBe("/ route page");
            expect(response.statusCode).toBe(200);
        });
    });
});