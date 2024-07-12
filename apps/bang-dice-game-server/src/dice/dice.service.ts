import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiceServiceBase } from "./base/dice.service.base";

@Injectable()
export class DiceService extends DiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
