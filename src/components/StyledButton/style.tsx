import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const OneButton = styled(props => (
    <Button variant="contained" color='primary' {...props} />
  ))`
  display: block;
  margin:5px !important;
`

export const OneExtendedButton = styled(props => (
    <OneButton variant='text' {...props} />
  ))`
  color: green !important;
`