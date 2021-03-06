import React from 'react';
import { Radio, RadioGroup } from '@material-ui/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  StyledFormControlLabel,
  StyledFormControl,
  FaRadioIcon
} from './style';

type Props = {
  boxLabel: any;
  radioLabels: Array<Object>;
};

export const RadioBoxWithFontaweSome: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState('soma');

  function handleChange(event: React.ChangeEvent<unknown>) {
    console.log('chosen:', (event.target as HTMLInputElement).value);
    console.log('chosen:', (event.target as HTMLInputElement).checked);
    setValue((event.target as HTMLInputElement).value);
  }

  const createItem = (radioItem: any) => (
    <StyledFormControlLabel
      checked={true}
      key={radioItem.id}
      value={radioItem.id}
      control={
        <Radio
          color="primary"
          icon={<FaRadioIcon icon={faCircle} />}
          checkedIcon={<FaRadioIcon checked={true} icon={faCheckCircle} />}
        />
      }
      label={radioItem.label}
      labelPlacement="end"
    />
  );

  return (
    <StyledFormControl 
    >
      <p>{props.boxLabel}</p>
      <RadioGroup value={value} onClick={handleChange}>
        {props.radioLabels.map(radioItem => createItem(radioItem))}
      </RadioGroup>
    </StyledFormControl>
  );
};

