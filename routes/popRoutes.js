import express from "express";
import { createPop, getAll, deleteRec } from "../controllers/popControl.js";

const popRoute = express.Router();

popRoute.post("/", createPop);
popRoute.get("/", getAll);
popRoute.delete("/:id", deleteRec)

export default popRoute;