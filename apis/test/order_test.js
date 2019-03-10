/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const should = chai.should();
const { expect } = chai;
let token = '';

describe('ORDER ROUTES TESTS', () => {
  const orderData = {
    login: {
      email: 'dentreal@yahoo.com',
      password: 'oloreofe',
    },
    order: {
      mealId: '1',
    },
    order404: {
      mealId: '2',
    },
    order400: {
      quantity: 1,
    },
    orderEmpty: {
    },
  };
  it('it should LOGIN Super caterer', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send(orderData.login)
      .end((err, res) => {
        res.body.should.have.property('authUser');
        res.should.have.status(200);
        // eslint-disable-next-line prefer-destructuring
        token = res.body.authUser.token;
        done();
      });
  });
  it('it should POST order', (done) => {
    chai.request(server)
      .post('/api/v1/order')
      .send(orderData.order)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('orderAdded');
        res.should.have.status(200);
        done();
      });
  });
  it('it should not POST an empty order', (done) => {
    chai.request(server)
      .post('/api/v1/order')
      .send(orderData.orderEmpty)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should not POST an incomplete order', (done) => {
    chai.request(server)
      .post('/api/v1/order')
      .send(orderData.order400)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('errors');
        res.should.have.status(400);
        done();
      });
  });
  it('it should not POST an order not available in the menu option', (done) => {
    chai.request(server)
      .post('/api/v1/order')
      .send(orderData.order404)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
  it('it should EDIT an order with a valid menu id ', (done) => {
    const order = {
      quantity: '1',
    }
    chai.request(server)
      .put('/api/v1/order/4')
      .send(order)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
  it('it should EDIT an order with a valid id ', (done) => {
    const order = {
      quantity: '3',
    };
    chai.request(server)
      .put('/api/v1/order/1')
      .send(order)
      .set('Authorization', token)      
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        done();
      });
  });
});
