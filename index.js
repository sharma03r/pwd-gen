import express from "express";
import dotenv from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "https://pwd-gen-six.vercel.app/" }));
app.listen(process.env.PORT, () => {
  console.log("Server running on port: ", process.env.PORT);
});

app.use("/api/v1", appRouter);
