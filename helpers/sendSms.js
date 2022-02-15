// this file is for communicating with twilio
// contain function that takes in a phone number and message
// can be reused for sending to restaurant/restaurant send response
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const restaurantPhone = process.env.RESTAURANT_PHONE;
const twilioPhone = process.env.TWILIO_PHONE;
const client = require('twilio')(accountSid, authToken);


const sendSms = function(phone, msg) {
  client.messages
    .create({
       body: msg,
       from: twilioPhone,
       to: phone
     })
    .then(message => console.log(message.body.split(' ')[7]));
};




const sendToRestaurant = function(db, orderId, order_notes) {
  db.query(`
    SELECT sushi.name as sushi, order_sushi.quantity as quantity
    FROM order_sushi
    JOIN sushi ON sushi.id = order_sushi.sushi_id
    WHERE order_sushi.order_id = ${orderId}
    GROUP BY sushi.name;
    `)
    .then(data => {
      let msg = `orderId: ${orderId}\n`;
      for (const item of data.rows) {
        msg += `${item.name}: ${item.quantity}\nPlease reply with order number and completion time in minutes`;
      }
      msg += `notes: ${order_notes}`;
      sendSms(restaurantPhone, msg);
    })
    .catch(err => {
      res
        .status(500)
        .send(err.message);
  });
}


module.exports = { sendSms, sendToRestaurant };
