import { Role } from "../role/Role";
import { Character } from "../character/Character";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  lifePoints: number | null;
  role?: Role | null;
  character?: Character | null;
};
