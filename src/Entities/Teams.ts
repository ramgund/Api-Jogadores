import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Player } from "./Players";

@Entity("teams")
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 30 })
  nome: string;

  @Column({ type: "char", length: 1 })
  serie: string;

  @OneToMany(() => Player, (player) => player.teams)
  players: Player[];
}
