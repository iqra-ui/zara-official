import slugify from "slugify";
import fs from "fs";
import productModel from "../models/productModel.js";
import braintree from "braintree";
import orderModel from "../models/orderModel.js";
import dotenv from "dotenv";

dotenv.config();

//payment gatway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

//create product
export const createProductController = async (req, res) => {
  try {
    const products = new productModel({
      images:req.files.map((r)=> r.path),
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category:req.body.category,
    })
    await products.save();
    res.status(201).send({
      success: true,
      message: "product created successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in creating product",
    });
  }
};

//get all products
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find();
     

    res.status(200).send({
      success: true,
      message: "All products",
      products,
      countTotal: products.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "error in getting product",
    });
  }
};

//get single product
export const getSingleProductController = async (req, res) => {
  try {
    const products = await productModel
      .findById( req.params.pid )
     
    res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      products,
      countTotal: products.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error whilr getting single product",
    });
  }
};

//get photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("images");
    if (product.images.data) {
      res.set("Content-type", product.images.contentType);
      return res.status(200).send(product.images.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while getting photo product",
    });
  }
};

//delete product
export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel
      .findByIdAndDelete(req.params.pid)
      

    res.status(200).send({
      success: true,
      message: "product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while deleting product",
    });
  }
};

//update product
// export const updateProductController = async (req, res) => {
//   try {
    

   
//     const products = await productModel.findByIdAndUpdate(
//       req.params.pid,
//       {
//         images:req.files.map((r)=> r.path),
//         name:req.body.name,
//        description:req.body.description,
//        price:req.body.price,
//        category:req.body.category,
//       }
//       // { new: true }
//     );
    
//     await products.save();
//     res.status(201).send({
//       success: true,
//       message: "product updated successfully",
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "error in update product",
//     });
//   }
// };
//update product
export const updateProductController = async (req, res) => {
  try {
    

   
    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      {
        images:req.files.map((r)=> r.path),
        name:req.body.name,
       description:req.body.description,
       price:req.price,
       category:req.body.category,
      }
      
    );
    
    await products.save();
    res.status(201).send({
      success: true,
      message: "product updated successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in update product",
    });
  }
};

//filters
export const productFilterController = async (req, res) => {
  try {
    const { checked } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
  

    const products = await productModel.find(args);
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "error in filtering product",
    });
  }
};

//search
export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const results = await productModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
    
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "error in search product",
    });
  }
};

//related product
export const relatedProductController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const products = await productModel
      .find({
        category: cid,
        _id: { $ne: pid },
      })
      .select("-photo")
      .limit(4)
      .populate("category");
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "error in related product",
    });
  }
};

//payment gateway api
//token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//payment
export const brainTreePaymentController = async (req, res) => {
  try {
    const { nonce, cart } = req.body;
    let total = 0;
    cart.map((i) => {total += i.price});
    let newTransaction = gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      function (error, result) {
        if (result) {
          const order = new orderModel({
            products: cart,
            payment: result,
            buyer: req.user._id,
          }).save();
          res.json({ ok: true });
        } else {
          res.status(500).send(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
