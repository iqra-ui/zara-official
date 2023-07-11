import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: mongoose.ObjectId,
    ref: "Category",
  },
  // quantity: {
  //   type: Number,
  //   required: true,
  // },

  images: {
    data: Buffer,
    type: Array,
    contentType: String,
  },
});
export default mongoose.model("products", productSchema);
