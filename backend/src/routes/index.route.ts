import { Router } from "express";
import mentorRoutes from './mentors.route'
// import partnerRoutes from './partners.route'

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.use('/mentors', mentorRoutes)
// router.use('/partners', partnerRoutes)

export default router;
