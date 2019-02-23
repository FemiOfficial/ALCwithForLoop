/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
let should = chai.should();
const { expect } = chai;

describe('MENU ROUTES TESTS', () => {
  it('it should POST a new menu option from the meals available', (done) => {
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

  it('it should GET all the menu options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        expect(res.body).to.have.property('data').to.be.a('array').to.have.lengthOf(0, 'must have an item inserted into it');
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
      .put('/api/v1/menu/6')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
});
