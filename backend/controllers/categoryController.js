import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";

//create
export const createCategoryController = async (req, res) => {
  try {
    const category = new categoryModel({
      images: req.files.map((r) => r.path),
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
    });
    await category.save();
    res.status(200).send({
      success: true,
      message: "Successfully inserted ",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in creating category",
    });
  }
};

//update category
export const updateCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(req.params.pid, {
      images: req.files.map((r) => r.path),
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
    });
    await category.save();
    res.status(200).send({
      success: true,
      message: "category updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while updating category",
    });
  }
};

//getAll category
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find();

    res.status(200).send({
      success: true,
      message: "categories list",
      category,
      // countTotal: category.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while getting all categories",
    });
  }
};

//single get category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.pid);
    res.status(200).send({
      success: true,
      message: "get single category successfully",
      category,
      countTotal: category.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while getting single category",
    });
  }
};

//delete category
export const deleteCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: " category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while deleting category",
    });
  }
};

//get product by category


export const productCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne(req.params.pid);
    const products = await productModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      category,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while getting product",
    });
  }
};