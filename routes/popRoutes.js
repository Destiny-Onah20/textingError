import express from "express";
import { createPop } from "../controllers/popControl.js";

const popRoute = express.Router();

popRoute.post("/", createPop);

export default popRoute;