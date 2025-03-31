"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const crypto_1 = __importDefault(require("crypto"));
const urlModel_1 = require("../models/urlModel");
class UrlController {
    static createResponse(req, res, result) {
        if (result.error) {
            console.log(`[${req.originalUrl}] `, result.error);
            return res.status(result.error.code).json(JSON.stringify(result.error));
        }
        return res.status(result.code).json(result.data);
    }
    static getUrlBySufix(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sufix } = req.params;
            if (!sufix)
                return res
                    .status(400)
                    .json({ error: { code: 400, message: "Not sufix provided" } });
            const result = yield urlModel_1.UrlModel.getUrlBySufix(sufix);
            return UrlController.createResponse(req, res, result);
        });
    }
    static checkIfSufixExist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sufix } = req.params;
            if (!sufix)
                return res
                    .status(400)
                    .json({ error: { code: 400, message: "Not sufix provided" } });
            const result = yield urlModel_1.UrlModel.checkIfSufixExist(sufix);
            return UrlController.createResponse(req, res, result);
        });
    }
    static clickUrlBySufix(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sufix } = req.params;
            if (!sufix)
                return res
                    .status(400)
                    .json({ error: { code: 400, message: "Not sufix provided" } });
            const extraData = req.body;
            const result = yield urlModel_1.UrlModel.clickUrlBySufix(sufix, extraData);
            return UrlController.createResponse(req, res, result);
        });
    }
    static createUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { url, sufix } = req.body;
            if (!url)
                return res
                    .status(400)
                    .json({ error: { code: 400, message: "Not url provided" } });
            // If sufix was not provided, autogenerate one
            if (!sufix) {
                sufix = crypto_1.default.randomBytes(6).toString("base64url");
            }
            // Create url
            const result = yield urlModel_1.UrlModel.createUrl({
                url: url,
                sufix: sufix,
            });
            // Generate response
            return UrlController.createResponse(req, res, result);
        });
    }
    static deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ code: 400, message: "Id not provided" });
            const result = yield urlModel_1.UrlModel.deleteById(id);
            return UrlController.createResponse(req, res, result);
        });
    }
}
exports.UrlController = UrlController;
