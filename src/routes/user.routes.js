import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/sign_up", userSignup);

export default userRoutes;