import { Router } from "express";
import { PlayerController } from "./Controllers/PlayerController";
import { TeamController } from "./Controllers/TeamController";

const routes = Router();

// Rotas do player

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

// Rotas do team

routes.post("/team", (req, res) => {
  new TeamController().CreateTeam(req, res);
});

routes.get("/teams", (req, res) => {
  new TeamController().ReturnAllTeams(req, res);
});

routes.get("/team/:id", (req, res) => {
  new TeamController().FindTeam(req, res);
});

routes.delete("team/:id", (req, res) => {
  new TeamController().DeleteTeam(req, res);
});

routes.put("/team/:id", (req, res) => {
  new TeamController().updateTeam(req, res);
});

export default routes;
