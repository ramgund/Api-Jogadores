import { Router } from "express";
import { PlayerController } from "./Controllers/PlayerController";

const routes = Router();

routes.post("/player", (req, res) => {
  new PlayerController().createPlayer(req, res);
});

routes.get("/players", (req, res) => {
  new PlayerController().returnAll(req, res);
});

routes.get("/player/:id", (req, res) => {
  new PlayerController().findById(req, res);
});

routes.delete("player/:id", (req, res) => {
  new PlayerController().deletePlayer(req, res);
});

routes.put("/player/:id", (req, res) => {
  new PlayerController().updatePlayer(req, res);
});

export default routes;
