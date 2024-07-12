import { Player } from "../player/Player";

export type Character = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startingLifePoints: number | null;
  name: string | null;
  specialAbility: string | null;
  players?: Array<Player>;
};
