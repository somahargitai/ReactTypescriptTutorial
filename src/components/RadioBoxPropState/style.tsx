import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, FormControl } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledFormControlLabel = styled(props => (
  <FormControlLabel {...props} />
))`
  background-color: white;
  border: 1px solid white;  
  ${props =>
    props.checked &&
    ` border: 1px solid #0685ff; `};

  & > span:last-child {
    color: #67748d;
    ${props => props.checked &&
      ` color: #0685ff; `};
  }
`;

export const StyledFormControl = styled(
 ({vertical, ...props}) => <FormControl {...props} /> 
)`
  & > div {
    color: #67748D;
    margin: 0;
    padding: 10px 10px 0px 10px;
    display: flex;
    flex-wrap: nowrap;    
    ${props => props.vertical === true ?
      ` flex-direction: column; `:
      ` flex-direction: row; `};
  }

  & > div > label {
    height: 50px;
    width: 198px;
    margin: 10px 5px;
    padding: 0px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(26, 44, 76, 0.08),
      0 5px 5px 0 rgba(26, 44, 76, 0.1);
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
