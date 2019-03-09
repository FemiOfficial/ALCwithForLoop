/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();
const { expect } = chai;

describe('USERS LOGIN AND REGISTER ROUTES', () => {
  const user = {
    user: {
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      phoneNumber: '08065470678',
      roleId: 2,
      password: 'password1234',
      address: 'No 32, peace avenue lagos',
      email: 'email@gmail.com',
    },
  };
  const user500 = {
    user: {
      firstName: 'femi',
      lastName: 'james',
      password: 'password',
      phoneNumber: '0806547893',
      address: 'No 32, peace avenue lagos',
      email: 'email@gmail.com',
    },
  };
  const user400 = {
    user: {
      firstName: 'femi',
      lastName: 'james',
      email: 'email@gmail.com',
    },
  };
  const login = {
    login: {
      email: 'email@gmail.com',
      password: 'password',
    },
  };

  const login400 = {
    login: {
      password: 123,
    },
  };

  const login404 = {
    login: {
      email: 'dent4real@gmail.com',
      password: 'password1234',
    },
  };
  describe('POST /login', () => {
    it('should create a single user', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('newUser');
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should create give an error for duplicate email', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user500)
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    it('should create give an error message', (done) => {
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user400)
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    it('should log user in successfully', (done) => {
      chai.request(server)
        .post('/api/v1/auth/login')
        .send(login)
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
        .send(login404)
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
        .send(login400)
        .end((err, res) => {
          res.body.should.have.property('error');
          res.should.have.status(400);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
