import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type PlayerUpdateInput = {
  name?: string | null;
  lifePoints?: number | null;
  role?: RoleWhereUniqueInput | null;
  character?: CharacterWhereUniqueInput | null;
};
