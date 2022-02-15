const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  // retrieve menu items from database
  router.get("/", (req, res) => {
    const query = `SELECT * FROM sushi`;
    db.query(query)
      .then(data => res.send(data.rows))
      .catch(err => {
        .res
          .status(500)
          .send(err.message);
      });
  });


  return router;
};
