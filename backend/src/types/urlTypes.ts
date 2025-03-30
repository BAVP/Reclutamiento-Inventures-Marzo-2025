import mongoose from "mongoose";

// ====================================== TYPES AND MODELS ==================================== //
export const UrlSchema = new mongoose.Schema({
  url: { type: String, required: "Url must be provided" },
  sufix: { type: String, required: "Sufix must be provided" },
  clicks: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
});

export const UrlDBModel = mongoose.model("Url", UrlSchema);
export type UrlType = mongoose.InferSchemaType<typeof UrlSchema>;

type Url = String;
export type UrlModelResultData = UrlType | Url | null;
export interface UrlModelResult {
  error: {
    code: number;
    message: string;
  } | null;
  data: UrlModelResultData;
  code: number;
}
