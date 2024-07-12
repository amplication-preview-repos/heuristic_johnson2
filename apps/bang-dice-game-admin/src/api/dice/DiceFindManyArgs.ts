import { DiceWhereInput } from "./DiceWhereInput";
import { DiceOrderByInput } from "./DiceOrderByInput";

export type DiceFindManyArgs = {
  where?: DiceWhereInput;
  orderBy?: Array<DiceOrderByInput>;
  skip?: number;
  take?: number;
};
