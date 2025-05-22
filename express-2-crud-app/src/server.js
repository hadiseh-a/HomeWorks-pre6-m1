import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routerProduct from "./routes/products.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/products", routerProduct);

app.listen(PORT, () => {
  console.log("it's running on port", PORT);
});
