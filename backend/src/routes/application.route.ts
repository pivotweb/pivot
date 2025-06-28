// src/routes/application.routes.ts
import { Router } from "express";
import {
  submitApplication,
  getApplication,
} from "../controllers/application.controller";
import upload from "../middlewares/upload.middleware";

const router = Router();

router.post(
  "/apply",
  upload.fields([
    { name: "cacCertificate", maxCount: 1 },
    { name: "businessPhoto", maxCount: 1 },
  ]),
  (req, res, next) => {
    Promise.resolve(submitApplication(req, res)).catch(next);
  }
);

router.get("/applications", (req, res, next) => {
  Promise.resolve(getApplication(req, res)).catch(next);
});

export default router;
