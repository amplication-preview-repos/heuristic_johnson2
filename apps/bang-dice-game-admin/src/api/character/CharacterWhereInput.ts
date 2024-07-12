import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type CharacterWhereInput = {
  id?: StringFilter;
  startingLifePoints?: IntNullableFilter;
  name?: StringNullableFilter;
  specialAbility?: StringNullableFilter;
  players?: PlayerListRelationFilter;
};
