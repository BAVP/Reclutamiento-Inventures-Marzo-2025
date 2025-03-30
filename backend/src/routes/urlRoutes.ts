import { Router, Request, Response } from "express";
export const urlRouter = Router();

// Middleware to deactivate urls after 3 days
import { updateUrls } from "../middleware/updateUrls";

import { UrlController } from "../controllers/urlController";

urlRouter.get("/:sufix", updateUrls, async (req: Request, res: Response) => {
  await UrlController.getUrlBySufix(req, res);
});
urlRouter.post("/", async (req: Request, res: Response) => {
  await UrlController.createUrl(req, res);
});
urlRouter.patch(
  "/:sufix/clicks",
  updateUrls,
  async (req: Request, res: Response) => {
    await UrlController.clickUrlBySufix(req, res);
  }
);
urlRouter.get(
  "/:sufix/exist",
  updateUrls,
  async (req: Request, res: Response) => {
    await UrlController.checkIfSufixExist(req, res);
  }
);
urlRouter.delete("/:id", async (req: Request, res: Response) => {
  await UrlController.deleteById(req, res);
});
