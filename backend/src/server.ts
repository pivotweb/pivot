import express from "express";
import cors from "cors"; // 
import connectDB from "./config/db";
import routes from "./routes/index.route";
import { PORT } from "./utils/env";
// contact route
import contactRoute from "./routes/contactRoute";
import { emailRouter } from "./routes/emailRoute";

const app = express();
connectDB();

// ✅ Add your allowed frontend origin(s)
const allowedOrigins = [
  "https://www.yourfrontend.com", 
  "http://localhost:5173" 
];

// ✅ CORS middleware with options
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true // ✅ If using cookies or sessions, keep this
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", contactRoute);
app.use("/api", routes);
app.use("/api", emailRouter);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
