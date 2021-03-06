import React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';

type Props = {
  radioLabels: Array<Object>;
};

export const RadioBoxSimple: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState('');

  function handleChange(event: React.ChangeEvent<unknown>) {
    console.log('chosen:', (event.target as HTMLInputElement).value);
    console.log('chosen:', (event.target as HTMLInputElement).checked);
    setValue((event.target as HTMLInputElement).value);
  }

  const createItem = (radioItem: any) => (
    <FormControlLabel
      checked={true}
      key={radioItem.id}
      value={radioItem.id}
      control={
        <Radio
          color="primary"
        />
      }
      label={radioItem.label}
      labelPlacement="end"
    />
  );

  return (
    <FormControl>
      <RadioGroup value={value} onClick={handleChange}>
        {props.radioLabels.map(radioItem => createItem(radioItem))}
      </RadioGroup>
    </FormControl>
  );
};

