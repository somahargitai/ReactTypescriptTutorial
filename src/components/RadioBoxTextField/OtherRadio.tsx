import React from "react";
import { FormControlLabel, Radio, TextField } from "@material-ui/core";

type RadioProps = {
  value: string;
  placeholder: any;
  onTextChange: any;
  onChange?: any;
  checked?: any;
};

export const OtherRadio: React.FC<RadioProps> = (props: RadioProps) => {
  console.log(props);
  return (
    <FormControlLabel
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
      control={<Radio name="gender" />}
      label={
        <TextField
          id="standard-bare"
          placeholder={props.placeholder}
          margin="normal"
          onChange={props.onTextChange}
        />
      }
    />
  );
};
