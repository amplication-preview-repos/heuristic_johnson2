import { SortOrder } from "../../util/SortOrder";

export type DiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  faceValue?: SortOrder;
};
