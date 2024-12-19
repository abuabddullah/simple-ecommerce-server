const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
  failedPayment,
  canceledPayment,
  successPayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

router.post("/create", createOrder);
router.post("/success", successPayment);
router.post("/capture", capturePayment);
router.post("/fail", failedPayment);
router.post("/cancel", canceledPayment);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;
