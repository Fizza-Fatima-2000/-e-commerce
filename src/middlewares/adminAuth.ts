import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils";
import ErrorHandler from "../utils/ErrorHandler";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const adminAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1]; 

    try {
      const user:any = verifyToken(token, process.env.JWT_SECRET || "");

      if (user) {
        req.user = user;


        if (user.role=== 1) {
          next();
        } else {
          return next(
            new ErrorHandler(
              "You are not authorized to access this resource.",
              403
            )
          );
        }
      } else {
        return next(new ErrorHandler("Please login!", 403));
      }
    } catch (error) {
      return next(new ErrorHandler("Unauthorized", 401));
    }
  } else {
    return next(new ErrorHandler("Unauthorized", 401));
  }
};
