const mysql = require("mysql");
const db = require("./database");
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

exports.addToCart = async (req, res) => {
  try {
    const { productID } = req.body;

    if (productID) {
      let cartID = uuidv4();
      const sql = `INSERT INTO Cart (cartID, productID) VALUES (${cartID}, ${productID})`;
      db.query(sql, function (err, data) {
        if (!err) {
          return res.status(200).json({
            message: "generate cartId",
            cartId: cartID,
            success: true,
          });
        } else {
          return res.status(500).json({
            message: "Something went wrong please try again",
            success: false,
          });
        }
      });
    } else {
      return res.status(200).json({
        message: "productID is required",
        success: false,
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
