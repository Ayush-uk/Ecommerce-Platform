import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["pending", "paid", "shipped", "delivered"],
    default: "pending"
  },
  paymentMethod: {
    type: String,
    default: "COD"
  }
}, { timestamps: true });
const Order = mongoose.model("Order", orderSchema)
export default Order;