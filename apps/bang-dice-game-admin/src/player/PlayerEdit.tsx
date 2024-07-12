import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RoleTitle } from "../role/RoleTitle";
import { CharacterTitle } from "../character/CharacterTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Life Points" source="lifePoints" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="character.id"
          reference="Character"
          label="Character"
        >
          <SelectInput optionText={CharacterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
