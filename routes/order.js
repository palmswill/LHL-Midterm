const express = require('express');

const { sendToRestaurant } = require('../helpers/sendSms.js');

const router  = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = (db) => {
  // GET request - /order/:id/cartItem
  // get all cart items given order id
  router.get('/:id/cartItem', (req, res) => {
    db.query(`
      SELECT sushi.id, name, price , quantity
      FROM order_sushi
      JOIN sushi ON sushi.id=sushi_id
      WHERE order_id = $1 AND quantity > 0
      ;
      `, [req.params.id])
      .then(data => res.send(data.rows))
      .catch(err => res.status(500).send(err.message));
  });

  // GET request - /order/:id
  // get order status by order id with cart item information
  router.get('/:orderId', (req, res) => {
    db.query(`
      SELECT *, orders.name as order_name
      FROM orders
      JOIN order_sushi ON orders.id=order_id
      JOIN sushi ON sushi.id=order_sushi.sushi_id
      WHERE orders.id = $1 AND QUANTITY > 0
      ;`, [req.params.orderId])
      .then(data => {
        const order = {
          "id": data.rows[0].id,
        "name": data.rows[0].order_name,
        "phone": data.rows[0].phone,
        "order_notes": data.rows[0].order_notes,
        "submitted": data.rows[0].submitted,
        "completed": data.rows[0].completed,
        "completion_time": data.rows[0].completion_time,
        "order_id": data.rows[0].order_id,
        "cartItems": []
        };
        for (const item of data.rows) {
          const obj = {
            name: item.name,
            content: item.content,
            price: item.price,
            quantity: item.quantity
          };
          order.cartItems.push(obj);
        }
        res.send(order)})

        .catch(err => {
          res
            .status(500)
            .send(err.message);
      });
  })


  // GET request-/order/:id/shopItem/:id
  // Add shop item into order , set default quantity to 1
  // if cart item exist, add one to quantity
  router.get('/:orderId/shopItem/:sushiId', (req, res) => {
    db.query(`
      INSERT INTO order_sushi (order_id, sushi_id, quantity)
      VALUES ($1, $2, $3)
      ON CONFLICT (order_id, sushi_id)
      DO NOTHING
      RETURNING*;
      `, [req.params.orderId, req.params.sushiId, 1])
      .then(data => res.send(data.rows[0]))
      .catch(err => res.status(500).send(err.message));
  });


  // GET request - /order/:id/cartItem/:id/:increment
  // increment or decrement cart items given order id, sushi id, manipulation
  router.get('/:orderId/cartItem/:sushiId/:manipulation', (req, res) => {
    // handle delete
    if (req.params.manipulation === 'delete') {
      return db.query(`
          DELETE FROM order_sushi
          WHERE order_id = $1 AND sushi_id = $2;
          `, [req.params.orderId, req.params.sushiId])
          .then(() => res.sendStatus(200))
          .catch(err => res.status(500).send(err.message));
    }

    // handle increment/decrement
    const val = req.params.manipulation === 'increment' ? 1 : -1;
    db.query(`
      UPDATE order_sushi
      SET quantity = quantity + $3
      WHERE order_id = $1 AND sushi_id = $2;
      `, [req.params.orderId, req.params.sushiId, val])
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err.message));
  });


  // POST request - /order
  // create empty order and return orderId;
  router.post('/', (req, res) => {
    db.query(`
      INSERT INTO orders
      DEFAULT VALUES
      RETURNING *;
      `)
      .then(data => res.send({ id: data.rows[0].id }))
      .catch(err => res.status(500).send(err.message));
  });


  // POST request - /order/submit
  router.post('/submit', jsonParser, (req, res) => {
    console.log([req.body.order_id, req.body.name, req.body.phone, req.body.order_notes]);
    db.query(`
      UPDATE orders
      SET name = $2, phone = $3, order_notes = $4, submitted = true
      WHERE id = $1;
      `, [req.body.order_id, req.body.name, req.body.phone, req.body.order_notes])
      .then(() => {
        // sendToRestaurant(db, req.body.order_id, req.body.order_notes);
        return res.send('sent to restaurant');
      })
      .catch(err => res.status(500).send(err.message));
  });


  return router;
};
