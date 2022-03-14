const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.use('/api/clients', require('./routes/api/clients'))
app.use('/api/suppliers', require('./routes/api/suppliers'))
app.use('/api/stocks', require('./routes/api/stocks'))

app.listen(5050,()=>{
    console.log("Server Start at: 5050");
})