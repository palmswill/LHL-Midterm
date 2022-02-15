const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // GET request - /order/initialize
  // create empty order and return orderId;
  router.get('/initialize', (req, res) => {
    db.query(`
      INSERT INTO orders (name, phone, order_notes, submitted)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `, ['Guest', null, null, false])
      .then(data => res.send({ id: data.rows[0].id }))
      .catch(err => {
        .res
        .status(500)
        .send(err.message);
      });
  });


  // GET request - /order/:id/cartItem
  // get all cart items given order id
  router.get('/:id/cartItem', (req, res) => {
    db.query(`
      SELECT *
      FROM order_sushi
      WHERE order_id = $1;
      `, [req.params.id])
      .then(data => res.send(data.rows))
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
      });
  });


  // GET request-/order/:id/shopItem/:id
  // Add shop item into order , set default quantity to 1
  router.get('/:orderId/shopItem/sushiId', (req, res) => {
    db.query(`
      INSERT INTO order_sushi (order_id, sushi_id, quantity)
      VALUES ($1, $2, $3);
      `, [req.params.orderId, req.params.sushiId, 1])
      .then(data => res.send(data.rows))
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
      });
  });


  // GET request - /order/:id/cartItem/:id/:increment
  // increment or decrement cart items given order id, sushi id, manipulation
  router.get('/:orderId/cartItem/:sushiId/:manipulation', (req, res) => {
    const val = req.params.manipulation === 'increment' ? 1 : -1;
    db.query(`
      UPDATE order_sushi
      SET quantity = quantity + $3
      WHERE order_id = $1 AND sushi_id = $2;
      `, [req.params.orderId, req.params.sushiId, val])
      .then(res.sendStatus(200))    //might want to check later for data.rowCount
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
      });
  });


  // GET request - /order/:id/cartItem/:id/delete
  // delete cart item given order id, sushi id
  router.get('/:orderId/cartItem/sushiId/delete', (req, res) => {
    db.query(`
      DELETE FROM order_sushi
      WHERE order_id = $1 AND sushi_id = $2
      `, [req.params.orderId, req.params.sushiId])
      .then(res.sendStatus(200))
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
      });
  });


  // POST request - /order/submit
  router.post('/submit', (req, res) => {
    db.query(`
      UPDATE orders
      SET name = $2, phone = $3, order_notes = $4, submitted = true
      WHERE order_id = $1;
      `, [req.body.order_id, req.body.name, req.body.phone, req.body.order_notes])
      .then(res.sendStatus(200))    // add twilio function
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
    });


    // TODO: add twilio function to handle sending order to restaurant
  });


  return router;
};
