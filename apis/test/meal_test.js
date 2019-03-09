// /* eslint-disable no-undef */
// import server from '../index';

// const chai = require('chai');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);
// const should = chai.should();
// const { expect } = chai;

// describe('MEALS ROUTES TEST', () => {
//   const meal = {
//     meal: {
//       price: 500,
//       name: 'Ofada Rice with diced beef stew',
//       description: 'A delicious ofada rice with diced beef stew',
//       isMenu: true,
//       type: 'African',
//     },
//   };
//   const meal400 = {
//     meal: {
//       price: 0,
//       name: 'Ofada Rice with diced beef stew',
//       description: 'A delicious ofada rice with diced beef stew',
//       isMenu: 'nice',
//       type: 'African Delight',
//     },
//   };
//   const login = {
//     login: {
//       email: 'dent4real@yahoo.com',
//       password: 'oloreofe',
//     },
//   };
//   const token401 = 'awesome-token-for-us';
//   const mealUpdate = {
//     meal: {
//       price: 400,
//       name: 'Ofada Rice with diced beef stew',
//       description: 'A delicious ofada rice with diced beef stew',
//       isMenu: true,
//       type: 'African',
//       promo: 'none',
//     },
//   };
//   const mealUpdate400 = {
//     meal: {
//       price: 0,
//       name: 5000,
//       description: 'A delicious ofada rice with diced beef stew',
//       isMenu: true,
//       type: 'African Delight',
//       promo: 'none',
//     },
//   };
//   const mealId = '';
//   let token = '';
//   it('it should GET all the meals', (done) => {
//     chai.request(server)
//       .get('/api/v1/meals/')
//       .end((err, res) => {
//         res.should.have.status(200);
//         /* size of the dummydata for Meals is the 4 ,
//         therefore we expect a value of 4 for the length of the array. */
//         expect(res.body).to.have.property('data').to.be.a('array').to.have.lengthOf(4, 'must have an item inserted into it');
//         done();
//       });
//   });

//   it('it should GET a meal with a valid id', (done) => {
//     chai.request(server)
//       .get('/api/v1/meals/1')
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });

//   it('it should RETURN A 404 Message for an invalid meal id', (done) => {
//     chai.request(server)
//       .get('/api/v1/meals/5')
//       .end((err, res) => {
//         res.body.should.have.property('error');
//         res.should.have.status(404);
//         done();
//       });
//   });

//   it('it should return error message for an incomplete POST of a meal', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//       category: 'Swallows',
//       size: '2',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         done();
//       });
//   });

//   it('it should return error message for an incomplete POST of a meal', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//       size: '2',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         done();
//       });
//   });

//   it('it should return error message for an incomplete POST of a meal', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         done();
//       });
//   });

//   it('it should return error message for POST A meal id which should be generated', (done) => {
//     const meal = {
//       id: '8',
//       currency: 'NGN',
//       size: 'bowl',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         done();
//       });
//   });
//   it('it should return error message for an incomplete POST of a meal', (done) => {
//     const meal = {
//       currency: 'NGN',
//       size: 'bowl',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a('object');
//         res.body.should.have.property('errors');
//         done();
//       });
//   });
//   it('it should POST a meal', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//       size: '2',
//       category: 'Swallows',
//       price: '300',
//       currency: 'NGN',
//     };
//     chai.request(server)
//       .post('/api/v1/meals')
//       .send(meal)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.should.have.property('data');
//         done();
//       });
//   });

//   it('it should Not EDIT a meal with an invalid id', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//       category: 'Swallows',
//       size: '2',
//     };
//     chai.request(server)
//       .put('/api/v1/meals/7')
//       .send(meal)
//       .end((err, res) => {
//         res.body.should.have.property('error');
//         res.should.have.status(404);
//         done();
//       });
//   });

//   it('it should EDIT a meal with an invalid id', (done) => {
//     const meal = {
//       name: 'Eba and Okro',
//       category: 'Swallows',
//       size: '2',
//     };
//     chai.request(server)
//       .put('/api/v1/meals/4')
//       .send(meal)
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });
//   it('it should not EDIT a meal id', (done) => {
//     const meal = {
//       id: '1',
//       category: 'Swallows',
//       size: '2',
//     };
//     chai.request(server)
//       .put('/api/v1/meals/4')
//       .send(meal)
//       .end((err, res) => {
//         res.body.should.have.property('error');
//         res.should.have.status(404);
//         done();
//       });
//   });

//   it('it should DELETE a meal with a valid id', (done) => {
//     chai.request(server)
//       .delete('/api/v1/meals/1')
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });

//   it('it should not DELETE a meal with an invalid id', (done) => {
//     chai.request(server)
//       .delete('/api/v1/meals/100')
//       .end((err, res) => {
//         res.body.should.have.property('error');
//         res.should.have.status(404);
//         done();
//       });
//   });
// });
