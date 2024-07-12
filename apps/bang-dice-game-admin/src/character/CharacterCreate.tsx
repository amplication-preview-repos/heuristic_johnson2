import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";

export const CharacterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Starting Life Points"
          source="startingLifePoints"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Special Ability" multiline source="specialAbility" />
        <ReferenceArrayInput
          source="players"
          reference="Player"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlayerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
