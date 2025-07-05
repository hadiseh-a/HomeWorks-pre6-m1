import { Router } from "express";
import {
  createPostForUser,
  createUser,
  deleteUser,
  getAllPostsForUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId/posts", getAllPostsForUser);
router.post("/", createUser);
router.post("/:userId/posts", createPostForUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
