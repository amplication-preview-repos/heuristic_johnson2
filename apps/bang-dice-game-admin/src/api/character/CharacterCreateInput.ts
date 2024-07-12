import { PlayerCreateNestedManyWithoutCharactersInput } from "./PlayerCreateNestedManyWithoutCharactersInput";

export type CharacterCreateInput = {
  startingLifePoints?: number | null;
  name?: string | null;
  specialAbility?: string | null;
  players?: PlayerCreateNestedManyWithoutCharactersInput;
};
