import UserModel from "../models/user.model";
import { BadRequestException } from "../configs/appError";

export const getCurrentUserService = async (userId) => {
  const user = await UserModel.findById(userId)
    .populate("currentWorkspace")
    .select("-password");

  if (!user) {
    throw new BadRequestException("User not found");
  }

  return {
    user,
  };
};
