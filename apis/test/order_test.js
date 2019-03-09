// /* eslint-disable no-undef */
// import server from '../index';

// const chai = require('chai');
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);
// const should = chai.should();
// const { expect } = chai;

// describe('ORDER ROUTES TESTS', () => {
//   it('it should POST a new order from the available meal options available for a particular day', (done) => {
//     const order = {
//       menu_id: '1',
//       quantity: 2,
//       address: 'Otta',
//       user: 'Alaye',
//     };
//     chai.request(server)
//       .post('/api/v1/order')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });
//   it('it should GET all order from the available meal options available for a particular day (length = 1)', (done) => {
//     chai.request(server)
//       .get('/api/v1/order')
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });
//   it('it should add to the quantity of the order since the menu option has been ordered for', (done) => {
//     const order = {
//       menu_id: '1',
//       quantity: 2,
//       address: 'Otta',
//       user: 'Alaye',
//     };
//     chai.request(server)
//       .post('/api/v1/order')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });
//   it('it should not POST an order for a menu option that does not exist', (done) => {
//     const order = {
//       menu_id: '6',
//       quantity: 2,
//       address: 'Otta',
//       user: 'Alaye',
//     };
//     chai.request(server)
//       .post('/api/v1/order')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('errors');
//         res.should.have.status(400);
//         done();
//       });
//   });
//   it('it should not EDIT an order with a invalid menu id ', (done) => {
//     const order = {
//       menu_id: '2',
//       quantity: 2,
//       address: 'Otta',
//     };
//     chai.request(server)
//       .put('/api/v1/order/4')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('errors');
//         res.should.have.status(400);
//         done();
//       });
//   });
//   it('it should not EDIT who made an order ', (done) => {
//     const order = {
//       user: 'Alaye',
//     };
//     chai.request(server)
//       .put('/api/v1/order/1')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('errors');
//         res.should.have.status(400);
//         done();
//       });
//   });
//   it('it should EDIT an order with a valid id ', (done) => {
//     const order = {
//       address: 'Alaye',
//     };
//     chai.request(server)
//       .put('/api/v1/order/1')
//       .send(order)
//       .end((err, res) => {
//         res.body.should.have.property('data');
//         res.should.have.status(200);
//         done();
//       });
//   });
// });
