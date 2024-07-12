export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  currentTurn: number | null;
};
