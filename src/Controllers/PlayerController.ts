import { Request, Response } from "express";
import { playerRepository } from "../repositories/PlayerRepository";
import { Team } from "../Entities/Teams";

export class PlayerController {
  async createPlayer(req: Request, res: Response) {
    const { nome, posicao } = req.body;
    if (!nome || !posicao) {
      return res.status(401).json("Nome e posicao são obrigatórios.");
    }

    try {
      const newPlayer = await playerRepository.save({ nome, posicao });

      return res.status(200).json({ newPlayer });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }
  async returnAll(req: Request, res: Response) {
    try {
      const allPlayers = await playerRepository.find();

      if (allPlayers === null) {
        return res
          .status(404)
          .json({ message: "Não existem players cadastrados." });
      }
      return res.status(200).json(allPlayers);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }
  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const idNumber = parseInt(id);

    try {
      const findPlayer = await playerRepository.findOneBy({ id: idNumber });
      if (!findPlayer) {
        return res.status(401).json({ Message: "Player não encontrado" });
      }
      return res.status(200).json(findPlayer);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }
  async deletePlayer(req: Request, res: Response) {
    const { id } = req.params;
    const idNumber = parseInt(id);

    try {
      const player = await playerRepository.findOneBy({ id: idNumber });

      if (!player) {
        return res.status(404).json({ Message: "Player não existe" });
      }

      await playerRepository.delete({ id: idNumber });
      return res.status(200).json({ Message: "Player deletado!" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }

  async updatePlayer(req: Request, res: Response) {
    const { nome, posicao } = req.body;
    const { id } = req.params;
    const idNumber = parseInt(id);

    try {
      const findPlayer = await playerRepository.find({
        where: { id: idNumber },
        relations: ["teams"],
      });

      if (!findPlayer) {
        return res.status(404).json({ Message: "Player não existe" });
      }
      await playerRepository.update({ id: idNumber }, { nome, posicao });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }
}
