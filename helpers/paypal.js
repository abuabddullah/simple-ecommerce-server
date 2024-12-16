const paypal = require("paypal-rest-sdk");
require("dotenv").config()

paypal.configure({
  mode: process.env.PAYPAL_MODE,
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
