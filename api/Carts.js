var mysql =require('mysql');
var db = require('./database');

exports.getAllCarts = function (req,res){
    const id = req.params;
    var sql = "SELECT * FROM Cart WHERE cartId = ${id}";
    db.query(sql, (err,data)=>{
       if(!id){
           res.json({msg: "not found"})
       }
          else{  console.log(id);
            res.json({data});
          }
        });
    };

