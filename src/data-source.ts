import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Player } from "./Entities/Players";
import { Team } from "./Entities/Teams";

const port = process.env.DB_PORT as number | undefined;

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Player, Team],
  migrations: ["./migrations/default/*.ts"],
  synchronize: true,
  logging: false,
});
