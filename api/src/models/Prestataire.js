import mongoose from "mongoose";

const PrestataireSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    validation: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAvalaible: {
      type: Boolean,
      required: true,
      default: true,
    },
    service_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  },
  { timestamps: true }
);

export const Prestataire = mongoose.model("Prestataire", PrestataireSchema);