import express from "express";
import db from "./config/db.mjs";
import router from "./routes/index.mjs";
import cors from "cors";

const app = express();

// Database connection
db.connection
  .once("open", () => console.log("✅ Connected to DB"))
  .on("error", (err) => console.error("❌ Error connecting DB -->", err));

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is ready to use 🚀");
});

// Routes
app.use("/", router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

export default app;
