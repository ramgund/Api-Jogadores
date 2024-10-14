import { Router } from "express";
import { PlayerController } from "./Controllers/PlayerController";

const routes = Router();

routes.post("/player", new PlayerController().createPlayer());

export default routes;
