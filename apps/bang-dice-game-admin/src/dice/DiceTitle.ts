import { Dice as TDice } from "../api/dice/Dice";

export const DICE_TITLE_FIELD = "id";

export const DiceTitle = (record: TDice): string => {
  return record.id?.toString() || String(record.id);
};
