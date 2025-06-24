import express from "express";
import {
registerVolunteer,
getAllVolunteers,
getVolunteerById,
} from "../controllers/volunteer";

const router = express.Router();

// Public route - Volunteer fills the form
router.post("/register", registerVolunteer);

// Admin routes (can be protected later with middleware)
router.get("/all", getAllVolunteers);
router.get("/:id", getVolunteerById);

export default router;