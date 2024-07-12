import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type PlayerCreateInput = {
  name?: string | null;
  lifePoints?: number | null;
  role?: RoleWhereUniqueInput | null;
  character?: CharacterWhereUniqueInput | null;
};
