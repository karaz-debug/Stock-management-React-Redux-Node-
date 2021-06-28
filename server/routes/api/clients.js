const express = require('express');
const db = require('./db');
const Response = require('./response')
const router = express.Router();


//get all clients
router.get('/',(req,res)=>{
    let sql = "SELECT * FROM `clients`";
    let response = new Response(req,res,sql);
    response.getAllData();
})

//get clients by id

router.get('/:id',(req,res)=>{
    const found = parseInt(req.params.id);
    let sql = `SELECT * FROM clients WHERE id = ${found}`;
    let response =  new Response(req,res,sql);
    response.getData();
    
});

// insert clients
router.post('/',(req,res)=>{
    let sql = "INSERT INTO clients SET ?"
    let response =  new Response(req,res,sql);
    response.insertData();
   
})

//update clients
router.put('/:id',(req,res)=>{
    let data_to_update = [ req.body.name,req.body.mobile ];
    let sql = `UPDATE clients SET name = ?, mobile = ? WHERE id = ${req.params.id}`;
    let response = new Response(req,res,sql);
    response.updateData(data_to_update);
  
})

//delete client

router.delete('/:id',(req,res)=>{
    let sql = `DELETE  FROM clients WHERE id = ${req.params.id}`;
    let response =  new Response(req,res,sql);
    response.deleteData();
    
});


module.exports = router