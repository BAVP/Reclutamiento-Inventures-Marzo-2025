import { Router, Request, Response } from "express";
export const urlRouter = Router();

import { UrlController } from "../controllers/urlController";

urlRouter.get("/:sufix", async (req: Request, res: Response) => {
  await UrlController.getUrlBySufix(req, res);
});
urlRouter.post("/", async (req: Request, res: Response) => {
  await UrlController.createUrl(req, res);
});
urlRouter.patch("/:sufix/click", async (req: Request, res: Response) => {
  await UrlController.clickUrlBySufix(req, res);
});
urlRouter.delete("/:id", async (req: Request, res: Response) => {
  await UrlController.deleteById(req, res);
});
