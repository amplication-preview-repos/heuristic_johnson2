import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GameWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  currentTurn?: IntNullableFilter;
};
