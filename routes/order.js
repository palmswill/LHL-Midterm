const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // add order to database
  router.post("/", (req, res) => {
    let orderId;
    const orderParams = [];
    queryParams.push(`${req.body.name}`);
    queryParams.push(`${req.body.phone}`);
    queryParams.push(`${req.body.order_notes}`);

    const orderQuery = `
    INSERT INTO orders (name, phone, order_notes)
    VALUES ($1, $2, $3)
    RETURNING *;
    `

    db.query(orderQuery, orderParams)
      .then(data => {
        orderId = data.rows[0].id;   // save order id
    })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    // save order items
    for (const orderItem in req.body.order_items) {
      const orderDetailParams = [orderId];
      orderDetailParams.push(`${orderItem.sushi_id}`);
      orderDetailParams.push(`${orderItem.quantity}`);

      const orderDetailQuery = `
      INSERT INTO order_sushi (order_id, sushi_id, quantity)
      VALUES ($1, $2, $3)
      RETURNING *;
      `

      db.query(orderDetailQuery, orderDetailParams)
        .then(data => {
          console.log(data.rows[0]);
      })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    }
    res.json({ id: orderId })

    // TODO: add twilio function to handle sending order to restaurant
  });




  return router;
};
