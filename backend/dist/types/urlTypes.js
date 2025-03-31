"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlDBModel = exports.UrlSchema = exports.InternetInfoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// ====================================== TYPES AND MODELS ==================================== //
exports.InternetInfoSchema = new mongoose_1.default.Schema({
    isp: { type: String },
    ip: { type: String },
    country: { type: String },
    region: { type: String },
    city: { type: String },
    lat: { type: String },
    lon: { type: String },
    timestamp: { type: Date, default: Date.now() },
});
exports.UrlSchema = new mongoose_1.default.Schema({
    url: { type: String, required: "Url must be provided" },
    sufix: { type: String, required: "Sufix must be provided" },
    clicks: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
    clicksInformation: { type: [exports.InternetInfoSchema], default: [] },
});
exports.UrlDBModel = mongoose_1.default.model("Url", exports.UrlSchema);
