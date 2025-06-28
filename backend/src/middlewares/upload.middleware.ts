// src/middlewares/upload.middleware.ts
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, "uploads/"),
  filename: (_, file, cb) =>
    cb(
      null,
      `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`
    ),
});

export default multer({ storage });
