import { AppDataSource } from "../data-source";
import { Team } from "../Entities/Teams";
export const TeamRepository = AppDataSource.getRepository(Team);
