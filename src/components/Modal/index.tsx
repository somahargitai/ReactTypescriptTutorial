import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";

import { CloseButton,Content, Stripe, StyledModal } from "./style";

type Props = {
  title: string;
  message: string;
  level: 'error'| 'info'| 'warning';
  open: boolean;
  setOpen: Function;
  landing?: boolean;
};

export const Modal: React.FC<Props> = (props: Props) => {
  const handleClose = () => {
    props.setOpen(props.open ? false : true);
  };

  return (
    <div>
      <Button onClick={handleClose}> Open Modal</Button>
      <StyledModal
      level={props.level}
      open={props.open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
        <div tabIndex={-1}>
          <Paper>
            <Stripe level={props.level} />
            <Content>
              <Typography variant="h6" id="modal-title">
                {props.title}
              </Typography>
              <Typography variant="body1" id="modal-description">
                {props.message}
              </Typography>
            </Content>
            {props.landing ? (
              <CloseButton
                onClick={handleClose}
                level={props.level}
                landing={props.landing}
              >
                {" "}
                {props.level} {props.landing}{" "}
              </CloseButton>
            ) : (
              <CloseButton
                onClick={handleClose}
                level={props.level}
                landing={props.landing}
              >
                {" "}
                X{" "}
              </CloseButton>
            )}
          </Paper>
        </div>
    </StyledModal>
    </div>

  );
};
