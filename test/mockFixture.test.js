const supertest = require('supertest');
let chai;
before(async () => {
    chai = await import('chai');
});

const app = require('../server');
const request = supertest(app);

let expect;
before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
});

describe('Mock Football League Fixtures Backend Server', () => {
    const mockCompetitionCode = 'PL';
    const invalidCompetitionCode = 'INVALID_CODE';

    it('should return a welcome message', async () => {
        const res = await request.get('/');
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Welcome to the Football League Fixtures Backend Server');
    });

    it('should retrieve mock fixtures by competition code', async () => {
        const response = await request.get(`/mock/fixtures/${mockCompetitionCode}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('data').that.is.an('object');
    });

    it('should simulate the creation of new fixtures', async () => {
        const response = await request.post(`/mock/fixtures/${mockCompetitionCode}`).send({ /* Mock payload */ });
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('data').that.is.an('object');
    });

    it('should simulate updating the fixtures', async () => {
        const response = await request.put(`/mock/fixtures/${mockCompetitionCode}`).send({ /* Mock update payload */ });
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('message', 'Fixtures update successful.');
    });

    it('should simulate deleting fixtures by competition code', async () => {
        const response = await request.delete(`/mock/fixtures/${mockCompetitionCode}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('message', 'Fixtures successfully deleted.');
    });

    it('should return a 404 for an invalid competition code on retrieval', async () => {
        const response = await request.get(`/mock/fixtures/${invalidCompetitionCode}`);
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'Fixtures not found for the provided competition code.');
    });

    it('should return a 404 for an invalid competition code on creation', async () => {
        const response = await request.post(`/mock/fixtures/${invalidCompetitionCode}`).send({ /* Mock payload */ });
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'The requested competition code does not exist.');
    });

    it('should return a 404 for an invalid competition code on updating', async () => {
        const response = await request.put(`/mock/fixtures/${invalidCompetitionCode}`).send({ /* Mock update payload */ });
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'Fixtures not found for the provided competition code.');
    });

    it('should return a 404 for an invalid competition code on deletion', async () => {
        const response = await request.delete(`/mock/fixtures/${invalidCompetitionCode}`);
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('message', 'Fixtures not found for the provided competition code.');
    });
});