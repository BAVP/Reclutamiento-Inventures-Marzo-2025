import { NextFunction, Request, Response } from "express";
import { UrlDBModel } from "../types/urlTypes";

// Deactivate urls when a sufix is provided
export const updateUrls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { sufix } = req.params;
  if (!sufix) next();

  // Date of 3 days before
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  await UrlDBModel.updateOne(
    {
      // Only if it is active and older than 3 days
      createdAt: { $lt: threeDaysAgo },
      isActive: true,
      sufix: sufix,
    },
    {
      // Deactivate
      $set: {
        isActive: false,
      },
    }
  );

  next();
};
