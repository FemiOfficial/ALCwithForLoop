/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
let should = chai.should();
const { expect } = chai;
let token = '';

describe('MENU ROUTES TESTS', () => {
  const menuData = {
    login: {
      email: 'dentreal@yahoo.com',
      password: 'oloreofe',
    },
    menu: {
      id: '1',
    },
    token401: 'jusanotherheadache',
  };
  it('it should login the super caterer', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send(menuData.login)
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.have.property('authUser').to.be.a('object');
        // eslint-disable-next-line prefer-destructuring
        token = res.body.authUser.token;
        done();
      });
  });
  it('it should not POST a new menu option available without a meal id', (done) => {
    const meal = {
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
  it('it should POST a new menu option', (done) => {
    chai.request(server)
      .post('/api/v1/menu')
      .send(menuData.menu)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('data');
        res.should.have.status(200);
        expect(res.body).to.have.property('data').to.be.a('object');
        done();
      });
  });
  it('it should not POST a new menu option of a meal that does not exist', (done) => {
    const meal = {
      meal_id: '7',
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
  it('it should GET all the menu options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/menu')
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('allMenu');
        res.should.have.status(200);
        done();
      });
  });
  it('it should not DELETE a menu option since an invalid id is sent from the request', (done) => {

    chai.request(server)
      .delete('/api/v1/menu/100')
      .set('Authorization', token)
      .end((err, res) => {
        res.body.should.have.property('error');
        res.should.have.status(404);
        done();
      });
  });
});
