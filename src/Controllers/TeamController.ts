import { Request, Response } from "express";
import { TeamRepository } from "../repositories/TeamRepository";
import { playerRepository } from "../repositories/PlayerRepository";

export class TeamController {
  async CreateTeam(req: Request, res: Response) {
    const { nome, serie } = req.body;

    if (!nome || !serie) {
      return res.status(404).json("Nome e serie são obrigatórios!");
    }

    try {
      const newTeam = await TeamRepository.save({ nome, serie });
      return res.status(201).json("Time cadastrado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json("Erro ao cadastrar time");
      }
    }
  }

  async ReturnAllTeams(req: Request, res: Response) {
    try {
      const AllTeams = await TeamRepository.find();

      if (AllTeams === null) {
        return res.status(401).json("Não existem times cadastrados!");
      }

      return res.status(201).json(AllTeams);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json("Erro ao retornar os times!");
      }
    }
  }

  async FindTeam(req: Request, res: Response) {
    const { id } = req.params;
    const idNumber = parseInt(id);

    try {
      const findTeam = await TeamRepository.find({
        where: { id: idNumber },
        relations: ["players"],
      });

      if (!findTeam) {
        return res.status(401).json("Não existem times com esse id!");
      }

      return res.status(201).json(findTeam);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json("Erro ao procurar o time!");
      }
    }
  }

  async DeleteTeam(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const idNumber = parseInt(id);

      const findTeam = await TeamRepository.findOneBy({ id: idNumber });

      if (!findTeam) {
        return res.status(401).json("Não existem times cadastrados!");
      }

      await TeamRepository.delete({ id: idNumber });
      return res.status(201).json("Time deletado!");
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json("Erro ao deletar o time!");
      }
    }
  }
  async updateTeam(req: Request, res: Response) {
    const { nome, serie } = req.body;
    const { id } = req.params;
    const idNumber = parseInt(id);

    try {
      const findTeam = await TeamRepository.findOneBy({ id: idNumber });

      if (!findTeam) {
        return res.status(404).json({ Message: "Time não existe" });
      }
      await TeamRepository.update({ id: idNumber }, { nome, serie });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json(error);
      }
    }
  }
}
