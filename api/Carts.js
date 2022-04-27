var mysql =require('mysql');
var db = require('./database');
const helper  =require("./helper")
exports.findCarts = async (req,res)=>{
    

  try {
    const { id } = req.params;
    if (!id) {
      return res.status(422).json({
        message: "Empty Filed found",
        error: error.message,
        success: false,
      });
    } else {
      let sqlSearch = `select * from Cart WHERE cartID = ? `;
      const search_query = mysql.format(sqlSearch, [id]);
      let carts = await helper.get(search_query);
      const prod =carts.map(name=> name.productID)
      console.log(prod);
      let sql = `select * from orders WHERE org_id =  ?`;
      let arr=[];
      for(let i=0 ; i<prod.length; i++){
      const search = mysql.format(sql,[prod[i]]);
      const cartData = await helper.get(search);
      arr.push(cartData[0]);
      //console.log(arr);
    }
    console.log(arr);
      if (carts.length === 0) {
        return res.status(200).json({
          message: "Carts not Exist",
          success: true,
        });
      } else {
        return res.json({
          message: `All PRODUCTS ID ${id} `,
          cartData : arr,
          success:true
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went Wrong 🤦‍♂️ ",
      error: error.message,
      success: false,
    });
    console.log(error);
  }
    };

