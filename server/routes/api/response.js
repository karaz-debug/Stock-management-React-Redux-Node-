const db = require('./db');
class Response {
    constructor(req,res,sql){
        this.req = req;
        this.res = res;
        this.sql = sql;
    }
    getAllData(){
         db.query(this.sql,(err,result)=>{
             if(err){
                 this.res.status(404).json({msg:"Error in database operation"})
             }
             else{
                 this.res.json(result)
             }
         })
    }
    getData(){
        db.query(this.sql,(err,result)=>{
            if(err){
                this.res.status(404).json({msg:"Error in database operation"})
            }
            else if(result.length===0){
                this.res.status(404).json({msg:"No Data available"})
            }
            else{
                this.res.json(result[0])
            }
        });
    }
    insertData(){
        let data_to_insert = this.req.body;
        db.query(this.sql,data_to_insert,(err,result)=>{
            if(err){
                this.res.status(404).json({msg:`Error in database operation ${err}`})
            }
            else{
                this.res.json({id:  result.insertId})
            }
        })  
    }

    updateData(data_to_update){
        db.query(this.sql,data_to_update,(err,result)=>{
            if(err){
                this.res.json({msg:`Error in database operation ${err}`})
            }
            else if(result.affectedRows>0){
                this.res.json({msg:"Data Updated"})
            }
            else{
                this.res.json({msg:`No Data exist on this Id : ${this.req.params.id}`})
            }
        })  
    }
    deleteData(){
        db.query(this.sql,(err,result)=>{
            if(err){
                this.res.json({msg:`Error in database operation ${err}`})
            }
            else if(result.affectedRows>0){
                this.res.json({msg:"Data Deleted"})
            }
            else{
                this.res.json({msg:`No Data exist on this Id : ${this.req.params.id}`})
            }
        });
    }

}

module.exports =Response