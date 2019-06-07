import styled from 'styled-components';

export const PaletteElement = styled.div`
  display: inline-block;
  width: 30px;
  height:30px;
  background-color: black;

  ${props =>
    props.primary &&
    `
      background: #C3A796;
      color: white;
    `};
  ${props =>
    props.secondary &&
    `
      background: #F8F4F3;
      color: white;
    `};
  ${props =>
    props.third &&
    `
      background: #600743;
      color: white;
    `};
  ${props =>
    props.forth &&
    `
      background: #5A545C;
      color: white;
    `};
  ${props =>
    props.fifth &&
    `
      background: #143339;
      color: white;
    `};
`;