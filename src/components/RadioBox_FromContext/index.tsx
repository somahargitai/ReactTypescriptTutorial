import React, { useContext } from 'react';
import { Radio, RadioGroup } from '@material-ui/core';
import { RadioButtonsContext_Fruits } from '../../store';
import {
  StyledFormControlLabel,
  StyledFormControl,
  FaRadioIcon
} from './style';

type Props = {
  boxLabel?: any;
  radioLabels: Array<Object>;
  vertical: any;
};

export const RadioBox_FromContext: React.FC<Props> = (props: Props) => {
  const [ value, setValue] = useContext(RadioButtonsContext_Fruits);

  const handleChange = (event:any) => {
     setValue(event.target.value);    
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
      <RadioGroup value={value} onClick={handleChange}>
        {props.radioLabels.map(radioItem => createItem(radioItem))}
      </RadioGroup>
    </StyledFormControl>
  );
};
