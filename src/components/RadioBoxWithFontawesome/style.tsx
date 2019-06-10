import React from 'react';
import styled from 'styled-components';
import {
  FormControlLabel,
  FormControl,
  Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFormControlLabel = styled(props => (
    <FormControlLabel {...props} />
  ))`

  `;

  export const StyledFormControl = styled(props => 
    <FormControl {...props} />
  )`
  padding: 0px 10px 5px 10px !important;
  font-family: 'GE Inspira Sans';
  background-color: #f6f9fc;

  & > div {
    display: flex;
    flex-wrap: nowrap;    
    ${props => props.vertical === true ?
      ` flex-direction: column; `:
      ` flex-direction: row; `};
  }

  `;
  
  export const FaRadioIcon = styled(props => <FontAwesomeIcon {...props} />)`
    display: flex;
    align-items: center;
  
    & > path {
      fill: #c2c7d1;
      ${props => props.checked &&
        ` fill: #0685ff; `};
    }
  `;
  