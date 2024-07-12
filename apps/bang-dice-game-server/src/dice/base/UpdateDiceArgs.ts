/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiceWhereUniqueInput } from "./DiceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DiceUpdateInput } from "./DiceUpdateInput";

@ArgsType()
class UpdateDiceArgs {
  @ApiProperty({
    required: true,
    type: () => DiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiceWhereUniqueInput)
  @Field(() => DiceWhereUniqueInput, { nullable: false })
  where!: DiceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DiceUpdateInput,
  })
  @ValidateNested()
  @Type(() => DiceUpdateInput)
  @Field(() => DiceUpdateInput, { nullable: false })
  data!: DiceUpdateInput;
}

export { UpdateDiceArgs as UpdateDiceArgs };
