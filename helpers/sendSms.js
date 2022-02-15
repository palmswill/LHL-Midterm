require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const restaurantPhone = process.env.RESTAURANT_PHONE;
const twilioPhone = process.env.TWILIO_PHONE;
const client = require('twilio')(accountSid, authToken);


// send sms message using twilio
const sendSms = function(phone, msg) {
  client.messages
    .create({
       body: msg,
       from: twilioPhone,
       to: phone
     })
    .then(message => console.log(message.body.split(' ')[7]));
};


// send order to restaurant via sms
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
    });
};


// return current time plus minutes
const completionTime = function(minutes) {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}: ${date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes()}`;
};


// send sms to customer notifying order completion time
const sendToCustomer = function(db, orderId, time) {
  const timestamp = completionTime(time);
  db.query(`
    UPDATE orders
    SET time = $1
    WHERE order_id = $2
    RETURNING *;
    `, [timestamp, orderId])
    .then(data => {
      const msg = `Hello ${data.rows[0].name}. Thank you for your order at SushiHut. Your order will be ready for pick-up in ${time} minutes.`;
      sendSms(data.rows[0].phone, msg);
    });
};


module.exports = { sendSms, sendToRestaurant, sendToCustomer };
