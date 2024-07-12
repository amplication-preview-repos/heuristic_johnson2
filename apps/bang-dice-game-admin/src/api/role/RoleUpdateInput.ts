import { PlayerUpdateManyWithoutRolesInput } from "./PlayerUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  description?: string | null;
  players?: PlayerUpdateManyWithoutRolesInput;
};
