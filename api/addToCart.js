const mysql = require("mysql");
var db = require("./database");
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

exports.addToCart = async (req, res) => {
  try {
    const { productID, cartID } = req.body;
    if (productID && cartID) {
      const sql = `select * from cart where cartID = '${cartID}'`;
      const result = await db.query(sql);
      let sql1 = `INSERT INTO Cart (productID, cartID) VALUES ('${productID}', '${cartID}')`;
      db.query(sql1, (err, result) => {
        if (err) throw err;
        return res.status(200).json({
          success: true,
          msg: "product added to cart ",
          cartID: cartID,
        });
      });
    } else if (!productID) {
      return res.status(422).json({
        success: false,
        msg: "productID is missing",
      });
    } else {
      let cartID = uuidv4();
      let sql = `INSERT INTO Cart (productID, cartID) VALUES ('${productID}', '${cartID}')`;
      db.query(sql, (err, result) => {
        console.log(result);
        if (err) throw err;
        res.status(200).json({
          success: true,
          msg: "product added to cart",
          cartID: cartID,
        });
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong please try again",
      success: false,
    });
  }
};
