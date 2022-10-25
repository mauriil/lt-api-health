import { UserModel } from "./users.model";
import { User } from "./users.types";
import { HttpRequestError } from "../../utils/httpRequestError";

export const createUser = async (user: Partial<User>): Promise<User> => {
  return UserModel.create({
    name: user.name,
    email: user.email,
    gender: user.gender,
    birth: user.birth,
    password: user.password,
    verifyToken: user.verifyToken,
  });
};

export const loginUser = async (user: Partial<User>): Promise<User> => {
  const storedUser = await UserModel.findOne({
    email: user.email.toLowerCase(),
  })
    .lean()
    .exec();

  if (!storedUser) {
    throw new HttpRequestError("Not found", 404, "User not found");
  }

  return storedUser;
};
