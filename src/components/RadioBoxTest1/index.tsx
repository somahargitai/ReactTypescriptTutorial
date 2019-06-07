import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// const radioLabels = [
//     { id: 'soma', label: 'Soma' },
//     { id: 'kata', label: 'Kata' },
//     { id: 'vica', label: 'Vica' }
//     ];
  
type Props ={
    boxLabel: any;
    radioLabels: Array<Object>;
  };

const RadioButtonsGroup: React.FC<Props> = (props: Props) => {
const radioImportLabels = props.radioLabels;
  const [value, setValue] = React.useState('female');

  function handleChange(event: any) {
    setValue(event.target.value);
  }

  const createItem = (radioItem:any) => (    
//     <FormControlLabel 
//     value="other" 
//     control={<Radio />} 
//     label="Other" />

    <FormControlLabel
      value={radioItem.id}
      control={<Radio color="primary" />}
      label={radioItem.label}
      labelPlacement="end"
    />
  );

  return (
    <div>
      <FormControl>
        <FormLabel >Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          {/* {radioLabels.map(radioItem => createItem(radioItem))} */}
          {props.radioLabels.map(radioItem => createItem(radioItem))}

          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      
      
      {/* <FormControl  className={classes.formControl}>
        <FormLabel >Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="start"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="start"
          />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
            labelPlacement="start"
          />
        </RadioGroup>
        <FormHelperText>labelPlacement start</FormHelperText>
      </FormControl>
  */}
    </div>
  );
}

export default RadioButtonsGroup;
