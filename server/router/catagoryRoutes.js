import express from "express";
// import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
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

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  upload.array("images", 30),
  createCategoryController
);

// update category
router.put(
  "/update-category/:pid",
  requireSignIn,
  isAdmin,
  upload.array("images", 30),
  updateCategoryController
);

//getAll category
router.get("/get-category", categoryController);

//delete category
router.delete("/delete-category/:pid", deleteCategoryController);

// //single category
router.get("/single-category/:pid", singleCategoryController);

export default router;