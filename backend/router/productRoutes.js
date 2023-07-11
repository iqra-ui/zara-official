import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productFilterController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { productCategoryController } from "../controllers/categoryController.js";

import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
//create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  // formidable(),
  upload.array("images", 4),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  upload.array("images", 4),
  // formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:pid", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete
router.delete("/product-delete/:pid", deleteProductController);

//filter
router.post("/product-filters", productFilterController);

//search product
router.get("/search/:keyword", searchProductController);

//category wise product
router.get("/product-category/:pid", productCategoryController);

//similar/related products
router.get("/related-product/:pid/:cid", relatedProductController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;