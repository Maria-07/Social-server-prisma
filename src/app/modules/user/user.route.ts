import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.getSingleUser);
router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);

export const UserRoutes = router;
