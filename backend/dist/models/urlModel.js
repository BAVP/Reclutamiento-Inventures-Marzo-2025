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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlModel = void 0;
const urlTypes_1 = require("../types/urlTypes");
class UrlModel {
    // ======================================== AUX FUNCTIONS =============================== //
    // Generate a result object in order to type the model response
    static createResult(data_1) {
        return __awaiter(this, arguments, void 0, function* (data, code = 200) {
            const result = {
                error: null,
                data: data,
                code: code,
            };
            return result;
        });
    }
    // Generate a result object with error data
    static createError(code, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                error: {
                    code: code,
                    message: message,
                },
                data: null,
                code: code,
            };
            return result;
        });
    }
    // ========================================= METHODS ===========================================
    // Get full url data by sufix
    static getUrlBySufix(sufix) {
        return __awaiter(this, void 0, void 0, function* () {
            const urls = yield urlTypes_1.UrlDBModel.find({
                sufix: sufix,
                isActive: true,
            });
            if (urls.length === 0)
                return UrlModel.createError(404, "Not active url was found.");
            return UrlModel.createResult(urls[0]);
        });
    }
    // Check if sufix is already in use. It does not return a full entry, so optimize net bandwidth
    static checkIfSufixExist(sufix) {
        return __awaiter(this, void 0, void 0, function* () {
            const urls = yield urlTypes_1.UrlDBModel.find({
                sufix: sufix,
                isActive: true,
            });
            if (urls.length === 0)
                return UrlModel.createError(404, "Not active url was found.");
            return UrlModel.createResult("", 302);
        });
    }
    // Create a new url
    static createUrl(urlData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check sufix unicity. If url is not active, then sufix can be used again.
            const url = yield urlTypes_1.UrlDBModel.findOne({
                sufix: urlData.sufix,
                isActive: true,
            });
            if (url)
                return UrlModel.createError(400, "Sufix already exist");
            // If not exist, create
            const newUrl = new urlTypes_1.UrlDBModel({
                url: urlData.url,
                sufix: urlData.sufix,
            });
            newUrl.save();
            return UrlModel.createResult(newUrl, 201);
        });
    }
    // Get long url and increment click
    static clickUrlBySufix(sufix_1) {
        return __awaiter(this, arguments, void 0, function* (sufix, extraData = {}) {
            const url = yield urlTypes_1.UrlDBModel.findOne({
                sufix: sufix,
                isActive: true,
            });
            if (!url)
                return UrlModel.createError(404, "Not found.");
            // Increment clicks and return long url
            url.clicks += 1;
            extraData.ip = extraData.query;
            url.clicksInformation.push(extraData);
            url.save();
            return UrlModel.createResult(url.url);
        });
    }
    static deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield urlTypes_1.UrlDBModel.deleteOne({
                _id: id,
            });
            return UrlModel.createResult("Url deleted", 204);
        });
    }
}
exports.UrlModel = UrlModel;
