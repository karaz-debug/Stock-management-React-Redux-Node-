const express = require("express");
const { isAdmin } = require("./authMiddleware");
const db = require("./db");
const router = express.Router();
const Response = require("./response");

// get all product
router.get("/", (req, res) => {
    let sql = "SELECT * FROM `products`";
    let response = new Response(req, res, sql);
    response.getAllData();
});

// get product by id
router.get("/:id", (req, res) => {
    const found = parseInt(req.params.id);
    let sql = `SELECT * FROM products WHERE id = ${found}`;
    let response = new Response(req, res, sql);
    response.getData();
});

// insert product
router.post("/", (req, res) => {
    let sql = "INSERT INTO products SET ?";
    let response = new Response(req, res, sql);
    response.insertData();
});

router.put("/:id", isAdmin, (req, res) => {
    // Extract product data from req.body
    const productData = req.body.products[0]; // Assuming it's an array with one product object

    // Prepare data_to_update array for product update
    let data_to_update_product = [
        productData.product,
        productData.description,
        productData.model,
        productData.unit,
        productData.quantity,
        productData.pamount,
        productData.samount,
        req.body.totalPurchase,
        req.body.totalSelling,
        productData.supplier.name,
        productData.supplier.company,
        productData.supplier.phone,
        productData.supplier.tax,
        productData.supplier.discount,
        productData.supplier.pdate,
        productData.supplier.total,
    ];

    let sql_product = `UPDATE products SET product = ?, description = ?, model = ?, unit = ?, quantity = ?, pamount = ?, samount = ?, totalPurchase = ?, totalSelling = ?, supplier_name = ?, company = ?, phone = ?, tax = ?, discount = ?, pdate = ?, total = ? WHERE id = ${req.params.id}`;

    let response = new Response(req, res);

    // Update the product data in the database
    response.updateData(sql_product, data_to_update_product);

});


//delete product

router.delete('/:id', isAdmin, (req, res) => {
    let sql = `DELETE  FROM products WHERE id = ${req.params.id}`;
    let response = new Response(req, res, sql);
    response.deleteData();
});
