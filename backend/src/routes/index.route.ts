import { Router } from "express";
import newsletterRoutes from "./newsletter.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/newsletter", newsletterRoutes);

export default router;
