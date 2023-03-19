import mongoose, { MongooseError } from "mongoose";

const avalible = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    orderItem: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "product",
        },
      },
    ],
    shippingAdr: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    pay: {
      type: String,
      required: true,
    },
    payResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);
const Avalible = mongoose.model("avaliable", avalible);
export default Avalible;
