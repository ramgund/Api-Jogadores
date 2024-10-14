import { AppDataSource } from "../data-source";
import { Player } from "../Entities/Players";

export const playerRepository = AppDataSource.getRepository(Player);
