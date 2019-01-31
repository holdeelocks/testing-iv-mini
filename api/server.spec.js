const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
	describe('GET / endpoint', () => {
		it('should respond with status code 200', async () => {
			let response = await request(server).get('/');

			expect(response.status).toBe(200);
		});
		it('should respond with JSON', async () => {
			let response = await request(server).get('/');

			expect(response.type).toMatch(/json/i);
		});
		it('should send back object with api', async () => {
			const expected = { api: 'up' };
			let response = await request(server).get('/');

			expect(response.body).toEqual(expected);
		});
	});
});
// what do we care about, we expect json format
// what status code
// what data is in the req.body
