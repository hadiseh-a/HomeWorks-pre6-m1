import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import memberRouter from "./routes/members.routes.js";
import { connectDB } from "./DB/connectDB.js";

const app = express();
dotenv.config();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const PORT =process.env.PORT|| 3000;

app.use("/member", memberRouter);
app.use("/", (req, res) => res.send("home page"));
app.use((req, res) => res.send("not found"));

const start = async () => {
  try {
    await connectDB(
      process.env.MONGO_URI
    );
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
