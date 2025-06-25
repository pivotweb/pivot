// src/controllers/application.controller.ts
import { Request, Response } from "express";
import Application from "../models/application.model";
import { sendAutoResponder } from "../services/email.service";

export const submitApplication = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      if (files.cacCertificate)
        data.cacCertificate = files.cacCertificate[0].path;
      if (files.businessPhoto) data.businessPhoto = files.businessPhoto[0].path;
    }

    const createdApp = await Application.create(data);
    await sendAutoResponder(createdApp.email, createdApp.fullName);

    return res
      .status(201)
      .json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Server error submitting application" });
  }
};

export const getApplication = async (req: Request, res: Response) => {
  try {
    const application = await Application.find();
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    return res.status(200).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error fetching application" });
  }
};
