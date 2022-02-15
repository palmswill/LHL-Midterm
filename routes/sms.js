const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const router  = express.Router();

// receive text from restaurant
// send reply to customer
module.exports = (db) => {
  router.post('/', (req, res) => {
    console.log(req.body.Body);
    const restaurantResponse = req.body.Body.split(' ');
    console.log(restaurantResponse);
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });


  return router;
};
