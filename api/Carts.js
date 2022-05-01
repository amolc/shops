var mysql = require("mysql");
var db = require("./database");
const helper = require("./helper");
exports.findCarts = async (req, res) => {
  try {
    console.log("=== find cart api ===")
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
      const prod = carts.map((name) => name.productID);
      let sql = `select * from orders WHERE org_id =  ?`;
      let arr = [];
      for (let i = 0; i < prod.length; i++) {
        const search = mysql.format(sql, [prod[i]]);
        const cartData = await helper.get(search);
        arr.push({...cartData[0], cartID: carts[i].id, quantity: carts[i].quantity});
        //console.log(arr);
      }
      if (carts.length === 0) {
        return res.status(200).json({
          message: "Carts not Exist",
          success: true,
        });
      } else {
        return res.json({
          message: `All PRODUCTS ID ${id} `,
          cartData: arr,
          success: true,
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

exports.removeProduct = async (req, res) => {
  try {
    let { cartID } = req.body;
    if (!cartID) {
      return res.status(422).json({
        message: "Empty Filed found",
        error: error.message,
        success: false,
      });
    } else {
      let sql = `DELETE FROM Cart WHERE id = ?`;
      const delete_query = mysql.format(sql, [cartID]);
      let delete_cart = await helper.delete(delete_query);
      if (delete_cart.affectedRows === 0) {
        return res.status(200).json({
          message: "Cart not Exist",
          success: true,
        });
      } else {
        return res.json({
          message: `Product delete successfully in your Cart  `,
          success: true,
          cardID: cartID,
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Something went Wrong 🤦‍♂️ ",
      error: error.message,
      success: false,
    });
  }
};
