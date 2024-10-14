import { Response, request } from "express";
import { Player } from "../Entities/Players";
import { playerRepository } from "../repositories/PlayerRepository";

export class PlayerController {
  async createPlayer(req: Request, res: Response) {
    const { nome, posicao } = req.body as unknown as {
      nome: string;
      posicao: string;
    };
    try {
      const newPlayer = await playerRepository.create({ nome, posicao });
      
    }
  }
}
