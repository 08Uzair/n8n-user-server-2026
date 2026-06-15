import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from "../controllers/user.js";

export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersById);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
