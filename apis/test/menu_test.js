/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
let should = chai.should();
const { expect } = chai;

describe('MENU ROUTES TESTS', () => {
  it('it should not POST a  new menu option without the quanity available', (done) => {
    const meal = {
      meal_id: 5,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should not POST a new menu option available without a meal id', (done) => {
    const meal = {
      quanity: 5,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should not POST a new menu option that is not available (meals.length = 4)', (done) => {
    const meal = {
      meal_id: 5,
      quantity: 34,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should POST a new menu option since the id provided is available', (done) => {
    const meal = {
      meal_id: '4',
      quantity: 34,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
  it('it should not POST a new menu option of a meal that does not exist', (done) => {
    const meal = {
      meal_id: '7',
      quantity: 34,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should POST a not the same meal twice on the same day', (done) => {
    const meal = {
      meal_id: '4',
      quantity: 45,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });

  it('it should GET all the menu options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
  it('it should EDIT a menu option with a valid id', (done) => {
    const meal = {
      meal_id: '2',
      quantity: '4',
      size: '2',
    };
    chai.request(server)
      .put('/api/v1/menu/1')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
  it('it should not EDIT a menu option since an invalid id is sent from the request', (done) => {
    const meal = {
      meal_id: '2',
      quantity: '4',
      size: '2',
    };
    chai.request(server)
      .put('/api/v1/menu/6')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
});
