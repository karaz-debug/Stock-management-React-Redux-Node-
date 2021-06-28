const mysql = require('mysql')

//create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'stock_management'
})
// db.connect(err =>{
//     //if(err){throw err}
//     if(err){console.log("db not connected")}
//     else{console.log("db connected")}
// })

module.exports = db;