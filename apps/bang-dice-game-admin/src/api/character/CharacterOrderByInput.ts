import { SortOrder } from "../../util/SortOrder";

export type CharacterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startingLifePoints?: SortOrder;
  name?: SortOrder;
  specialAbility?: SortOrder;
};
