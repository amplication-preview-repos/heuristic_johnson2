import { PlayerUpdateManyWithoutCharactersInput } from "./PlayerUpdateManyWithoutCharactersInput";

export type CharacterUpdateInput = {
  startingLifePoints?: number | null;
  name?: string | null;
  specialAbility?: string | null;
  players?: PlayerUpdateManyWithoutCharactersInput;
};
