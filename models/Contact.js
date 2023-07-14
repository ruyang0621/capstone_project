import mongoose from "mongoose";
import validator from "validator";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 2,
      maxlength: 60,
      trim: true,
    },
    lastName: {
      type: String,
      maxlength: 60,
      trim: true,
      default: null,
    },
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 100,
    },
    email: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    note: {
      type: String,
      default: null,
      maxlength: 500,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
