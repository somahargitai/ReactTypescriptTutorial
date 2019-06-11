import React, { Component, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { OtherRadio } from "./OtherRadio";

// based on https://codesandbox.io/s/mz1wn4n33j
// to be refactored

type Props = {};

export const RadioBoxTextField: React.FC<Props> = (props: Props) => {
  const [state, setState] = useState({
    value: "",
    otherValue: ""
  });

  const handleChange = (event: any) => {
    setState({
      value: event.target.value,
      otherValue: ""
    });
  };
  const handleOthers = (event: any) => {
    setState({
      value: event.target.value,
      otherValue: event.target.value
    });
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        aria-label="Gender"
        name="gender1"
        value={state.value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          name="gender"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          name="gender"
          control={<Radio />}
          label="Male"
        />
        <OtherRadio
          onTextChange={handleOthers}
          value={state.otherValue}
          placeholder="Others"
        />
      </RadioGroup>
      {`Selected Item: ${state.value}`}
    </FormControl>
  );
};
