/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();
const { expect } = chai;

describe('ORDER ROUTES TESTS', () => {
  it('it should GET all order from the available meal options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/order')
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        expect(res.body).to.have.property('data').to.be.a('array').to.have.lengthOf(0, 'must have an item inserted into it');
        done();
      });
  });
  it('it should POST a new order from the available meal options available for a particular day', (done) => {
    const order = {
      menu_id: 1,
      quantity: 2,
      address: 'Otta',
      user: 'Alaye',
    };
    chai.request(server)
      .post('/api/v1/order')
      .send(order)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
});
