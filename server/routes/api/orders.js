const express = require("express");
const { authenticateToken, isAdmin } = require("./authMiddleware");
const db = require("./db");
const router = express.Router();
const Response = require("./response");


// get all orders
router.get("/order", (req, res) => {
    let sql = "SELECT * FROM `orders`";
    let response = new Response(req, res, sql);
    response.getAllData();
});

// get order by id
router.get("order/:id", (req, res) => {
    const found = parseInt(req.params.id);
    let sql = `SELECT * FROM orders WHERE id = ${found}`;
    let response = new Response(req, res, sql);
    response.getData();
});

router.post("/order", (req, res) => {
    const orderData = req.body; // Assuming the frontend sends the order data in the request body
    const customerInfo = req.body
    let response = new Response(req, res);
    response.createOrder(orderData, customerInfo);
});

router.delete("/order/:orderId", authenticateToken, isAdmin, (req, res) => {
    const orderId = req.params.orderId;
    let response = new Response(req, res);
    response.deleteOrder(orderId);
});


