import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiceService } from "./dice.service";
import { DiceControllerBase } from "./base/dice.controller.base";

@swagger.ApiTags("dice")
@common.Controller("dice")
export class DiceController extends DiceControllerBase {
  constructor(protected readonly service: DiceService) {
    super(service);
  }
}
