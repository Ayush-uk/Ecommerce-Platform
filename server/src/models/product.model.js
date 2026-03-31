import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true 
    },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  stock: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

 const Product = mongoose.model("Product", productSchema);
 export default Product;