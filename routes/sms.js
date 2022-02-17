require('dotenv').config();
const express = require('express');
const { sendToCustomer } = require('../helpers/sendSms.js');
const restaurantPhone = process.env.RESTAURANT_PHONE;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const router  = express.Router();

// receive text from restaurant
// send reply to customer
module.exports = (db) => {
  router.post('/', (req, res) => {
    if (req.body.From === restaurantPhone) {
      const restaurantResponse = req.body.Body.split(' ');
      sendToCustomer(db, restaurantResponse[0], restaurantResponse[1]);
    }
  });

  return router;
};
