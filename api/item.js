var mysql =require('mysql');
var db = require('./database');


exports.getAllItems = function (req, res) {
    var sql = "SELECT * FROM orders";
    //console.log(sql);
    db.query(sql, function (err, data) {    
        console.log(err)
        console.log(data)
        res.json(data);
    });
};

