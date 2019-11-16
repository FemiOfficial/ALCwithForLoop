/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();
const { expect } = chai;
let token = '';

describe('MEALS ROUTES TEST', () => {
  const mealData = {
    meal: {
      price: 500,
      name: 'Ofada Rice with diced beef stew',
      description: 'A delicious ofada rice with diced beef stew',
      category: 'African',
    },
    meal400: {
      price: 0,
      name: 'Ofada Rice with diced beef stew',
      description: 'A delicious ofada rice with diced beef stew',
    },
    login: {
      email: 'dentreal@yahoo.com',
      password: 'oloreofe',
    },
    token401: 'awesome-token-for-us',
    mealUpdate: {
      price: 400,
      name: 'Ofada Rice with diced beef stew',
      description: 'A delicious ofada rice with diced beef stew',
      isMenu: true,
      type: 'African',
      promo: 'none',
    },
    mealUpdate400: {
      price: 0,
      name: 5000,
      description: 'A delicious ofada rice with diced beef stew',
      isMenu: true,
      type: 'African Delight',
      promo: 'none',
    },
  };
  it('it should login the super caterer', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send(mealData.login)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.have.property('authUser').to.be.a('object');
        // eslint-disable-next-line prefer-destructuring
        token = res.body.authUser.token;
        done();
      });
  });
  it('it should GET all the meals', (done) => {
    chai.request(server)
      .get('/api/v1/meals/')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.have.property('data').to.be.a('array');
        done();
      });
  });

  it('it should GET a meal with a valid id', (done) => {
    chai.request(server)
      .get('/api/v1/meals/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });

  it('it should RETURN A 404 Message for an invalid meal id', (done) => {
    chai.request(server)
      .get('/api/v1/meals/50')
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });

  it('it should return error message for an incomplete POST of a meal', (done) => {
    chai.request(server)
      .post('/api/v1/meals')
      .send(mealData.meal400)
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
  });

  it('it should return error message for an incomplete POST of a meal', (done) => {
    const meal = {
      name: 'Eba and Okro',
    };
    chai.request(server)
      .post('/api/v1/meals')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
  });

  it('it should not POST an empty meal', (done) => {
    const meal = {};
    chai.request(server)
      .post('/api/v1/meals')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
  });
  it('it should POST a meal', (done) => {
    chai.request(server)
      .post('/api/v1/meals')
      .send(mealData.meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        done();
      });
  });

  it('it should Not EDIT a meal with an invalid id', (done) => {
    const meal = {
      name: 'Eba and Okro',
      category: 'Swallows',
      size: '2',
    };
    chai.request(server)
      .put('/api/v1/meals/70')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });

  it('it should EDIT a meal with a valid id', (done) => {
    const meal = {
      name: 'Eba and Okro',
      category: 'Swallows',
    };
    chai.request(server)
      .put('/api/v1/meals/1')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
  it('it should not EDIT a meal id', (done) => {
    const meal = {
      id: '1',
      category: 'Swallows',
      size: '2',
    };
    chai.request(server)
      .put('/api/v1/meals/1')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(401);
        done();
      });
  });

  // it('it should DELETE a meal with a valid id', (done) => {
  //   chai.request(server)
  //     .delete('/api/v1/meals/1')
  //     .end((err, res) => {
  //       res.body.should.have.property('data');
  //       res.should.have.status(200);
  //       done();
  //     });
  // });

  // it('it should not DELETE a meal with an invalid id', (done) => {
  //   chai.request(server)
  //     .delete('/api/v1/meals/100')
  //     .end((err, res) => {
  //       res.body.should.have.property('error');
  //       res.should.have.status(404);
  //       done();
  //     });
  // });
});
