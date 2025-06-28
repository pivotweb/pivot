import { Router } from "express";
import routes from "./application.route";
import contactRoute from "./contactRoute";

const router = Router();

router.use("/application", routes);
router.use("/contact", contactRoute);

export default router;
