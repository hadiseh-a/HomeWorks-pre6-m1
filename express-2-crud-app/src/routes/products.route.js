import { parsedIdMiddleWare } from "../middlewares/ParsedID.js";
import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getOneProduct,
  patchProduct,
  postProduct,
  putProduct,
} from "../controllers/product.controller.js";
import requestTimeLogger from "../middlewares/returnTime.js";

const router = Router();

router.get("/",requestTimeLogger, getAllProducts);
router.get("/:id",requestTimeLogger, parsedIdMiddleWare, getOneProduct);
router.post("/",requestTimeLogger, postProduct);
router.put("/:id",requestTimeLogger, parsedIdMiddleWare, putProduct);
router.patch("/:id",requestTimeLogger, parsedIdMiddleWare, patchProduct);
router.delete("/:id",requestTimeLogger, parsedIdMiddleWare, deleteProduct);

export default router;
