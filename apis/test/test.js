/* eslint-disable no-undef */
import server from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('/GET meals', () => {
  it('it should GET all the meals', (done) => {
    chai.request(server)
      .get('/api/v1/meals/')
      .end((err, res) => {
        res.should.have.status(200);
        /* size of the dummydata for Meals is the 4 , 
        therefore we expect a value of 4 for the length of the array. */
        expect(res.body).to.have.property('data').to.be.a('array').to.have.lengthOf(4, 'must have an item inserted into it');
        done();
      });
  });

  it('it should GET a meal with a valid id', (done) => {
    chai.request(server)
      .get('/api/v1/meals/1')
      .end((err, res) => {
        res.body.should.have.property('data')
        res.should.have.status(200);
        done();
      });
  });


  it('it should POST a meal', (done) => {
    const meal = {
      name: 'Eba and Okro',
      category: 'Swallows',
      size: '2',
    };
    chai.request(server)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
  });


  it('it should EDIT a meal with a valid id', (done) => {
    const meal = {
      name: 'Eba and Okro',
      category: 'Swallows',
      size: '2',
    };
    chai.request(server)
      .put('/api/v1/meals/5')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('error')
        res.should.have.status(404);
        done();
      });
  });

  it('it should DELETE a meal with a valid id', (done) => {
    chai.request(server)
      .delete('/api/v1/meals/1')
      .end((err, res) => {
        res.body.should.have.property('data')
        res.should.have.status(200);
        done();
      });
  });

  it('it should POST a new menu option from the meals available', (done) => {
    const meal = {
      meal_id: 5,
    };
    chai.request(server)
      .post('/api/v1/menu')
      .send(meal)
      .end((err, res) => {
        res.body.should.have.property('errors')
        res.should.have.status(400);
        done();
      });
  });

  it('it should GET all the menu options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.body.should.have.property('data')
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
        res.body.should.have.property('error')
        res.should.have.status(404);
        done();
      });
  });

  it('it should GET all order from the available meal options available for a particular day', (done) => {
    chai.request(server)
      .get('/api/v1/order')
      .end((err, res) => {
        res.body.should.have.property('data')
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
        res.body.should.have.property('errors')
        res.should.have.status(400);
        done();
      });
  });
});
