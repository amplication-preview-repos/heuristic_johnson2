import { Module } from "@nestjs/common";
import { DiceModuleBase } from "./base/dice.module.base";
import { DiceService } from "./dice.service";
import { DiceController } from "./dice.controller";
import { DiceResolver } from "./dice.resolver";

@Module({
  imports: [DiceModuleBase],
  controllers: [DiceController],
  providers: [DiceService, DiceResolver],
  exports: [DiceService],
})
export class DiceModule {}
