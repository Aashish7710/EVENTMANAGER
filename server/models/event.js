import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    userId: { type: String, default: null },
    externalEmail: { type: String, default: null },
    externalName: { type: String, default: null },
    formResponses: { type: mongoose.Schema.Types.Mixed, default: {} },
    status: {
      type: String,
      enum: ["REGISTERED", "WAITLISTED", "CANCELLED"],
      default: "REGISTERED",
    },
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    venue: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    registrationDeadline: { type: Date, default: null },
    totalSeats: { type: Number, default: 0 },
    registeredCount: { type: Number, default: 0 },
    entryFee: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["UPCOMING", "LIVE", "COMPLETED", "CANCELLED"],
      default: "UPCOMING",
    },
    showWinner: { type: Boolean, default: false },
    winners: [{ type: mongoose.Schema.Types.Mixed }],
    sponsors: [
      {
        name: { type: String },
        logo: { type: String },
      },
    ],
    media: [
      {
        url: { type: String },
        type: { type: String, default: "image" },
      },
    ],
    requiredFields: [{ type: String }],
    customFields: [{ type: mongoose.Schema.Types.Mixed }],
    allowedPrograms: {
      type: [String],
      default: ["BTECH", "MTECH", "OTHER"],
    },
    allowedYears: [{ type: String }],
    provideCertificate: { type: Boolean, default: false },
    club: {
      clubId: { type: String, default: "" },
      clubName: { type: String, default: "" },
    },
    createdBy: {
      userId: { type: String, default: "" },
      clubName: { type: String, default: "" },
    },
    registrations: [registrationSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
