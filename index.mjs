import express from "express";
import db from "./config/db.mjs";
import router from "./routes/index.mjs";
import cors from "cors";

const app = express();

db.connection
  .once("open", () => console.log("Connected to DB"))
  .on("error", (err) => console.error("Error connecting DB -->", err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready to use");
});

app.use("/", router);

export default app;
