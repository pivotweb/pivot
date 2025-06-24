import { Router } from "express";
import volunteerRoutes from "./volunteer.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// 
router.use("/volunteer", volunteerRoutes);

export default router;
