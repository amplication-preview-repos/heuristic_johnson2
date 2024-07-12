import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  lifePoints?: IntNullableFilter;
  role?: RoleWhereUniqueInput;
  character?: CharacterWhereUniqueInput;
};
