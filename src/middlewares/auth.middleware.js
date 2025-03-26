import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedTokenInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedTokenInfo?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      // TODO : discuss about frontend
      throw new ApiError(401, "Inalid accesss token");
    }

    req.user = user; // yaha req mien user ka object bana dala hamne so that req can cary this information

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || " Invalid Access Token");
  }
});
