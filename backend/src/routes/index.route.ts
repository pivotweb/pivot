import { Router } from "express";
import routes from "./application.route";

const router = Router();

router.use("/application", routes);

export default router;
