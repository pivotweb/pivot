import { Router } from "express";

import newsletterRoutes from "./newsletter.route";
import routes from "./application.route";
import contactRoute from "./contactRoute";


const router = Router();

router.use("/application", routes);
router.use("/contact", contactRoute);

router.use("/newsletter", newsletterRoutes);

export default router;
