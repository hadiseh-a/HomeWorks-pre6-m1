import express from "express";
import {
  addFacultyMember,
  deleteFacultyMember,
  getAllFacultyMembers,
  getOneMember,
  updateFacultyMember,
} from "../controllers/members.controller.js";

const router = express.Router();

router.get("/", getAllFacultyMembers);

router.get("/:id", getOneMember);

router.post("/", addFacultyMember);

router.patch("/:id", updateFacultyMember);

router.delete("/:id", deleteFacultyMember);

export default router;
