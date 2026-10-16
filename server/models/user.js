import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    name: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    rollNo: { type: String, default: "" },
    branch: { type: String, default: "" },
    year: { type: String, default: "" },
    program: {
      type: String,
      enum: ["BTECH", "MTECH", "OTHER"],
      default: "BTECH",
    },
    role: {
      type: String,
      enum: ["student", "coordinator", "admin"],
      default: "student",
    },
    profileImage: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
