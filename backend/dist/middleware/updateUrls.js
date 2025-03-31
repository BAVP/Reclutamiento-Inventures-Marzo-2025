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
exports.updateUrls = void 0;
const urlTypes_1 = require("../types/urlTypes");
// Deactivate urls when a sufix is provided
const updateUrls = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { sufix } = req.params;
    if (!sufix)
        next();
    // Date of 3 days before
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    yield urlTypes_1.UrlDBModel.updateOne({
        // Only if it is active and older than 3 days
        createdAt: { $lt: threeDaysAgo },
        isActive: true,
        sufix: sufix,
    }, {
        // Deactivate
        $set: {
            isActive: false,
        },
    });
    next();
});
exports.updateUrls = updateUrls;
