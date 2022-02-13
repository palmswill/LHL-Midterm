const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // retrieve menu items from database
  router.get("/", (req, res) => {
    const query = `SELECT * FROM sushi`;
    console.log(query);
    db.query(query)
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
  return router;
};
