import { Request, Response } from "express";
import crypto from "crypto";

import { UrlModelResult } from "../types/urlTypes";
import { UrlModel } from "../models/urlModel";

export class UrlController {
  static createResponse(req: Request, res: Response, result: UrlModelResult) {
    if (result.error) {
      console.log(`[${req.originalUrl}] `, result.error);
      return res.status(result.error.code).json(JSON.stringify(result.error));
    }

    return res.status(result.code).json(result.data);
  }

  static async getUrlBySufix(req: Request, res: Response) {
    const { sufix } = req.params;
    if (!sufix)
      return res
        .status(400)
        .json({ error: { code: 400, message: "Not sufix provided" } });

    const result = await UrlModel.getUrlBySufix(sufix);
    return UrlController.createResponse(req, res, result);
  }

  static async checkIfSufixExist(req: Request, res: Response) {
    const { sufix } = req.params;
    if (!sufix)
      return res
        .status(400)
        .json({ error: { code: 400, message: "Not sufix provided" } });

    const result = await UrlModel.checkIfSufixExist(sufix);
    return UrlController.createResponse(req, res, result);
  }

  static async clickUrlBySufix(req: Request, res: Response) {
    const { sufix } = req.params;
    if (!sufix)
      return res
        .status(400)
        .json({ error: { code: 400, message: "Not sufix provided" } });

    const extraData = req.body;
    const result = await UrlModel.clickUrlBySufix(sufix, extraData);
    return UrlController.createResponse(req, res, result);
  }

  static async createUrl(req: Request, res: Response) {
    let { url, sufix } = req.body;
    if (!url)
      return res
        .status(400)
        .json({ error: { code: 400, message: "Not url provided" } });

    // If sufix was not provided, autogenerate one
    if (!sufix) {
      sufix = crypto.randomBytes(6).toString("base64url");
    }

    // Create url
    const result = await UrlModel.createUrl({
      url: url,
      sufix: sufix,
    });

    // Generate response
    return UrlController.createResponse(req, res, result);
  }

  static async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ code: 400, message: "Id not provided" });

    const result = await UrlModel.deleteById(id);
    return UrlController.createResponse(req, res, result);
  }
}
