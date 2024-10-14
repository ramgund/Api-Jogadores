import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Team } from "./Teams";

@Entity("players")
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 30 })
  nome: string;

  @Column({ type: "char", length: 3 })
  posicao: string;

  @ManyToOne(() => Team, (team) => team.player)
  @JoinColumn({ name: "team_id" })
  teams: Team[];
}
