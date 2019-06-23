import React from "react";
import styled from "styled-components";
import { Button, Modal } from "@material-ui/core";

export const Content =styled(props=><div {...props} />)`
  padding: 20px 20px 75px 20px;
`;

export const CloseButton = styled(props => <Button {...props} />)`
  min-height: 46px;
  padding: 6px 0px;
  position: absolute !important;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    !props.landing
    ? ``
    : props.level === "error"
      ? `border: 2px solid red !important;`
      : props.level === "warning"
      ? `border: 2px solid orange !important;`
      : props.level === "info"
      ? `border: 2px solid green !important;`
      : `border: 2px solid black !important;`};

  & span {
    font-size: 16pt;
  }
`;

export const Stripe = styled(props => <div {...props} />)`
  height: 5px;
  ${props =>
    props.level === "error"
      ? `background-color:red`
      : props.level === "warning"
      ? `background-color:orange`
      : props.level === "info"
      ? `background-color:green`
      : `background-color:black`};
`;

export const StyledModal = styled(props => <Modal {...props} />)`
  width: 45%;
  margin: 60px auto;
  min-height: 12rem;

  & > div > div {
    position: relative;
  }


  & h6 {
    margin: 5px 0;
    font-size: 26pt;
  }

  & p {
    font-size: 16pt;
  }
`;


// & > div > div > div#content {
//   padding: 20px 20px 75px 20px;
// }