import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Career", careerSchema);
export default Career;