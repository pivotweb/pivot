import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import routes from "./routes/index.route";
import { PORT } from "./utils/env";

const app = express();
connectDB();

app.use(
  cors({
    origin: ["https://thepivotsite.netlify.app", "http://localhost:5173", "https://challenge.thepivot.ng", "https://thepivot.ng", "http://localhost:5176", "http://localhost:5175", "https://thepivot.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
