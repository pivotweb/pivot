import { Router } from "express";
import volunteerRoutes from "./volunteer.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register the volunteer routes
// This will handle all routes starting with /volunteer
router.use("/volunteer", volunteerRoutes);

export default router;
