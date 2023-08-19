import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);

    res.send({
      success: true,
      message: "User Create Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);

    res.send({
      success: true,
      message: "User Profile created/updated Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();

    res.send({
      success: true,
      message: "All User get Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req.params.id));

    res.send({
      success: true,
      message: "single User get Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const userController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getAllUser,
  getSingleUser,
};
