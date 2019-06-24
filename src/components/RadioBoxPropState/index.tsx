import React from 'react';
import { Radio, RadioGroup } from '@material-ui/core';
import {
  StyledFormControlLabel,
  StyledFormControl,
  FaRadioIcon
} from './style';

type Props = {
  boxLabel?: any;
  radioLabels: Array<Object>;
  vertical: boolean;
  setValue: any;
  value: string;
};

export const RadioBoxPropState: React.FC<Props> = (props: Props) => {
  function handleChange(event: React.ChangeEvent<unknown>) {
    props.setValue((event.target as HTMLInputElement).value);    
  }

  const createItem = (radioItem: any) => (
    <StyledFormControlLabel      
      key={radioItem.id}
      value={radioItem.id}
      control={
        <Radio
          color="primary"
          icon={<FaRadioIcon icon={['far', 'circle']} />}
          checkedIcon={<FaRadioIcon checked={true} icon={['fas', 'check-circle']} />}
        />
      }
      label={radioItem.label}
      labelPlacement="end"
    />
  );

  return (
    <StyledFormControl 
      vertical={props.vertical} 
    >
      <div>{props.boxLabel}</div>
      <RadioGroup value={props.value} onChange={handleChange}>
        {props.radioLabels.map(radioItem => createItem(radioItem))}
      </RadioGroup>
    </StyledFormControl>
  );
};
