import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  players?: PlayerListRelationFilter;
};
