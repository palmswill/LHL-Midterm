const express = require('express');
const router  = express.Router();
// const { createNewOrder, getCartItems, updateCart } = require('../helpers/dbQueries');

// add item to cart
// remove item from cart
// edit quantity

module.exports = (db) => {
  // retrieve cart items
  router.get("/", (req, res) => {
    let orderId = req.session.orderId;

    // create new order and set cookie if no cookie
    if (!orderId) {
      const orderQuery = `
      INSERT INTO orders (name, phone, order_notes, submitted)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `
      db.query(orderQuery, [null, null, null, false])
        .then(data => {
          orderId = data.rows[0].id;   // save order id
      })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
      req.session.orderId = orderId;   // set cookie
    }

    // retrieve cart items
    const query = `
    SELECT *
    FROM order_sushi
    WHERE order_id = $1;
    `
    db.query(query, [orderId])
      .then(data => {
        const sushi = data.rows;
        res.json({ sushi });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  // update cart items
  // will receive an action from the request and make the appropriate query
  // can be insert, update (quantity), delete
  router.post('/', (req, res) => {
    const orderId = req.session.orderId;
    const sushiId = req.body.sushiId;
    const quantity = req.body.quantity;
    const action = req.body.action;

    let query;

    if (action === 'insert') {
      query = `
      INSERT INTO order_sushi (order_id, sushi_id, quantity)
      VALUES ($1, $2, $3)
      RETURNING *;
      `
    } else if (action === 'update') {
      query = `
      UPDATE order_sushi
      SET quantity = $3
      WHERE order_id = $1 AND sushi_id = $2
      RETURNING *;
      `
    } else {
      query = `
      DELETE FROM order_sushi
      WHERE order_id = $1 AND sushi_id = $2
      RETURNING *;
      `
    }

    db.query(query, [orderId, sushiId, quantity])
      .then(data => {
        const orderItem = data.rows[0];
        res.json({ orderItem });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });


  return router;
};
