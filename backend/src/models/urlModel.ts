import {
  UrlType,
  UrlDBModel,
  UrlModelResult,
  UrlModelResultData,
} from "../types/urlTypes";

export class UrlModel {
  // ======================================== AUX FUNCTIONS =============================== //

  // Generate a result object in order to type the model response
  static async createResult(data: UrlModelResultData, code: number = 200) {
    const result: UrlModelResult = {
      error: null,
      data: data,
      code: code,
    };
    return result;
  }

  // Generate a result object with error data
  static async createError(code: number, message: string) {
    const result: UrlModelResult = {
      error: {
        code: code,
        message: message,
      },
      data: null,
      code: code,
    };
    return result;
  }

  // ========================================= METHODS ===========================================

  // Get full url data by sufix
  static async getUrlBySufix(sufix: string) {
    const urls = await UrlDBModel.find({
      sufix: sufix,
      isActive: true,
    });

    if (urls.length === 0)
      return UrlModel.createError(404, "Not active url was found.");
    return UrlModel.createResult(urls[0]);
  }

  // Create a new url
  static async createUrl(urlData: { url: String; sufix: String }) {
    // Check sufix unicity. If url is not active, then sufix can be used again.
    const url = await UrlDBModel.findOne({
      sufix: urlData.sufix,
      isActive: true,
    });

    if (url) return UrlModel.createError(400, "Sufix already exist");

    // If not exist, create
    const newUrl = new UrlDBModel({
      url: urlData.url,
      sufix: urlData.sufix,
    });

    newUrl.save();

    return UrlModel.createResult(newUrl, 201);
  }

  // Get long url and increment click
  static async clickUrlBySufix(sufix: string) {
    const url = await UrlDBModel.findOne({
      sufix: sufix,
      isActive: true,
    });

    if (!url) return UrlModel.createError(404, "Not found.");

    // Increment clicks and return long url
    url.clicks += 1;
    url.save();
    return UrlModel.createResult(process.env.MY_DOMAIN + url.url!);
  }

  static async deleteById(id: String) {
    await UrlDBModel.deleteOne({
      _id: id,
    });

    return UrlModel.createResult("Url deleted", 204);
  }
}
