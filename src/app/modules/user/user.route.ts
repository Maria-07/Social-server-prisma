import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hellop Prisma");
});
router.post("/create-user", userController.insertIntoDB);

export const UserRoutes = router;
