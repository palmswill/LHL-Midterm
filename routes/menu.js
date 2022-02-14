const express = require('express');
const router  = express.Router();

// db function required: getMenuItems()
// module.exports = (db) => {
//   // retrieve menu items from database
//   router.get("/", (req, res) => {
//     getMenuItems(db)
//     .then(menu => res.send({ menu }))
//     .catch(e => {
//       console.error(e);
//       res.send(e)
//     })
//   });
//   return router;
// };




module.exports = (db) => {
  // retrieve menu items from database
  router.get("/", (req, res) => {
    const query = `SELECT * FROM sushi`;
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
