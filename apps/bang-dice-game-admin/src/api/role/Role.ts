import { Player } from "../player/Player";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  players?: Array<Player>;
};
