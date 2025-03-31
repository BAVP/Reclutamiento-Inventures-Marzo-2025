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
exports.urlRouter = void 0;
const express_1 = require("express");
exports.urlRouter = (0, express_1.Router)();
// Middleware to deactivate urls after 3 days
const updateUrls_1 = require("../middleware/updateUrls");
const urlController_1 = require("../controllers/urlController");
exports.urlRouter.get("/:sufix", updateUrls_1.updateUrls, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield urlController_1.UrlController.getUrlBySufix(req, res);
}));
exports.urlRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield urlController_1.UrlController.createUrl(req, res);
}));
exports.urlRouter.patch("/:sufix/clicks", updateUrls_1.updateUrls, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield urlController_1.UrlController.clickUrlBySufix(req, res);
}));
exports.urlRouter.get("/:sufix/exist", updateUrls_1.updateUrls, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield urlController_1.UrlController.checkIfSufixExist(req, res);
}));
exports.urlRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield urlController_1.UrlController.deleteById(req, res);
}));
