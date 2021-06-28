const express = require('express');
const db = require('./db');
const router = express.Router();
const Response = require('./response')

//get all stocks
router.get('/',(req,res)=>{
    let sql = "SELECT stocks.id,stocks.product,stocks.qty,stocks.mes,stocks.og_price,stocks.sale_price,supplier.name FROM stocks ,supplier WHERE stocks.supplier_id =supplier.id";
    let response = new Response(req,res,sql);
    response.getAllData();
})

//get stocks by id

router.get('/:id',(req,res)=>{
    const found = parseInt(req.params.id);
    
    let sql = `SELECT stocks.id,stocks.product,stocks.qty,stocks.mes,stocks.og_price,stocks.sale_price,supplier.name FROM stocks ,supplier WHERE stocks.supplier_id =supplier.id AND stocks.id= ${found}`;
    let response =  new Response(req,res,sql);
    response.getData();
});

// insert stocks
router.post('/',(req,res)=>{
    let sql = "INSERT INTO stocks SET ?"
    let response =  new Response(req,res,sql);
    response.insertData();
})

//update stocks
router.put('/:id',(req,res)=>{
    let data_to_update = [ req.body.product,req.body.qty,req.body.og_price,req.body.sale_price ];
    let sql = `UPDATE stocks SET product = ?, qty = ? ,og_price = ? , sale_price = ? WHERE id = ${req.params.id}`;
    let response = new Response(req,res,sql);
    response.updateData(data_to_update);
})

//delete client

router.delete('/:id',(req,res)=>{
    let sql = `DELETE  FROM stocks WHERE id = ${req.params.id}`;
    let response =  new Response(req,res,sql);
    response.deleteData();
});


module.exports = router