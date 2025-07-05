import express from "express";
import "dotenv/config";
import cors from "cors";
import sequelize from "./db/connection.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";

const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = process.env.SERVER_PORT || 3000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("tables created successfully");

    app.listen(PORT, () => {
      console.log("server is running on  " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log(process.env.MYSQL_USERNAME);
  });
