/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();
const { expect } = chai;

describe('USERS LOGIN AND REGISTER ROUTES', () => {
  const userData = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      phoneNumber: '08065470678',
      password: 'password1234',
      address: 'No 32, peace avenue lagos',
      email: 'email@gmail.com',
    },
    user500: {
      firstName: 'femi',
      lastName: 'james',
      password: 'password',
      phoneNumber: '0806547893',
      address: 'No 32, peace avenue lagos',
      email: 'email@gmail.com',
    },
    user400: {
      firstName: 'femi',
      lastName: 'james',
      email: 'email@gmail.com',
    },
    login: {
      email: 'alayeguide@gmail.com',
      password: 'oloreofe',
    },
    login400: {
      password: 123,
    },
    login404: {
      email: 'dent4real@gmail.com',
      password: 'password1234',
    },
  };
  describe('POST /signup /login', () => {
    it('should create a single user', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(userData.user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should create give an error for duplicate email', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(userData.user500)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('should create give an error message', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(userData.user400)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('should log user in successfully', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(userData.login)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('authUser');
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should create give an error message', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(userData.login404)
        .end((err, res) => {
          res.body.should.have.property('error');
          res.should.have.status(404);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should create give an error message', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(userData.login400)
        .end((err, res) => {
          res.body.should.have.property('error');
          res.should.have.status(400);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
