import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, resizeBy, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization"?.replace("Bearer", ""));

    if (!token) {
      throw new ApiError(401, "Unauthorized access");
    }

    const decodedToen = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToen._id).select(
      "-password -refreshToken",
    );

    if (!user) {
      throw new ApiError(401, "Invalid acessToen");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid acessToken");
  }
});
