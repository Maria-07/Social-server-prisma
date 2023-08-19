import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.createPost(req.body);

    res.send({
      success: true,
      message: "Post Create Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost();

    res.send({
      success: true,
      message: "All post get Successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const postController = {
  createPost,
  getAllPost,
};
