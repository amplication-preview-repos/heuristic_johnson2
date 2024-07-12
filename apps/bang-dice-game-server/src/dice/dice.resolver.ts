import * as graphql from "@nestjs/graphql";
import { DiceResolverBase } from "./base/dice.resolver.base";
import { Dice } from "./base/Dice";
import { DiceService } from "./dice.service";

@graphql.Resolver(() => Dice)
export class DiceResolver extends DiceResolverBase {
  constructor(protected readonly service: DiceService) {
    super(service);
  }
}
