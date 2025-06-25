import { Router } from "express";
import { subscribeToNewsletter } from "../controllers/newsletter.controller";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Newsletter subscription route
router.post("/newsletter", subscribeToNewsletter);

export default router;
