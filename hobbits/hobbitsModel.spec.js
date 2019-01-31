const request = require('supertest');
const db = require('../data/dbConfig');
const hobbitModel = require('./hobbitsModel');

// before and after Each or before and after All
afterEach(async () => {
	await db('hobbits').truncate();
});

describe('hobbits model', () => {
	it('should insert provided hobbit', async () => {
		const hobbit = await hobbitModel.insert({ name: 'Bilbo' });

		const hobbits = await db('hobbits');
		expect(hobbits).toHaveLength(1);
		expect(hobbit.name).toEqual('Bilbo');
	});
});
