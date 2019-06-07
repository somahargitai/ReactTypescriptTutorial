import styled from "styled-components";

export const RadioWrapper = styled.ul`
  font-family: 'GE Inspira Sans';
  display: inline-block;
  background-color: #f6f9fc;
  padding: 10px;
  margin: 0px;
  list-style: none;
  text-align: left;
  white-space: nowrap;

  & > p {
    color: #67748D;
    margin: 0;
    padding: 0 10px 10px 10px;
  }    
`;

export const RadioItem = styled.li`
  display: inline-block;
  position:relative;


  & label {
    display: inline-block;
    position:relative;
    height: 50px;
    width: 198px;
    margin: 0 5px;
    padding: 0px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(26,44,76,0.08), 0 5px 5px 0 rgba(26,44,76,0.10);
    background-color: white;

    border: 1px solid white;
  }

  & label p {
    display: inline-block;
    position: absolute;
    top: 18px;
    left:34px;
    line-height:1.0;
    margin:0px;
    left:34px;
    font-size:14px;
    color: #67748D;
  }

  & label span {
    position: absolute;   
    display: inline-block;    
    left: 6px;
    top:15px;
    width: 17px;
    height: 17px; 
    border: 2px solid #c2c7d1;
    border-radius: 11px;
  }

  & label span:checked+label {
    font-weight: bold;
    color: red;
  }   
  
  & label span svg {
    display: none;
    position: relative;
    top: 3px;
    left: 2px;
    width:20px;
    height:20px;
  }
`;

export const RadioInput = styled.input.attrs({
  type: 'radio',
  value: props => props.id,
})`
  -webkit-appearance:none;
  display: none;
  width:20px;
  height:20px;
  border:1px solid darkgray;
  border-radius:50%;
  outline:none;
  box-shadow:0 0 5px 0px gray inset; 

  &:checked+label span {
    left: 9px;
    top:15px;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 25px;
    background-color: #0685ff;
  }

  &:checked+label svg {
    display:inline-block;
  }

  &:checked+label {
        border: 1px solid #56acfe;
      }
  &:checked+label p {
    color: #0585FF;
  }
`;
