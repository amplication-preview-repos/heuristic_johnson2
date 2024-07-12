import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  lifePoints?: SortOrder;
  roleId?: SortOrder;
  characterId?: SortOrder;
};
