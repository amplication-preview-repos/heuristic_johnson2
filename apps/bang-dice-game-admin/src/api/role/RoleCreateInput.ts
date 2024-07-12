import { PlayerCreateNestedManyWithoutRolesInput } from "./PlayerCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  description?: string | null;
  players?: PlayerCreateNestedManyWithoutRolesInput;
};
