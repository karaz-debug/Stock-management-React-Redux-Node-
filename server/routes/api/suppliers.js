const express = require('express');
const db = require('./db');
const router = express.Router();
const Response = require('./response')

//get all supplier
router.get('/', (req, res) => {
    let sql = "SELECT * FROM `supplier`";

    let response = new Response(req, res, sql);
    response.getAllData();
})

//get supplier by id

router.get('/:id', (req, res) => {
    const found = parseInt(req.params.id);
    let sql = `SELECT * FROM supplier WHERE id = ${found}`;
    let response = new Response(req, res, sql);
    response.getData();
});

// insert supplier
router.post('/', (req, res) => {
    let sql = "INSERT INTO supplier SET ?"
    let response = new Response(req, res, sql);
    response.insertData();
})

//update supplier
router.put('/:id', (req, res) => {
    let data_to_update = [req.body.name, req.body.cname, req.body.mobile, req.body.address];
    let sql = `UPDATE supplier SET name = ?, cname = ?, mobile = ?, address = ? WHERE id = ${req.params.id}`;
    let response = new Response(req, res, sql);
    response.updateData(data_to_update);
})

//delete client

router.delete('/:id', (req, res) => {
    let sql = `DELETE  FROM supplier WHERE id = ${req.params.id}`;
    let response = new Response(req, res, sql);
    response.deleteData();
});


module.exports = router