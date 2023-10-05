import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    answer :{
      type : String,
      required : true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
