import { Dialog, DialogBody } from "@material-tailwind/react";
import React from "react";

type ModalProps = {
  control: boolean;
  handleOpen: () => void;
  template: string | JSX.Element | JSX.Element[];
};

function Modal({ template, control, handleOpen }: ModalProps) {
  return (
    <Dialog open={control} handler={handleOpen}>
      <DialogBody>{template}</DialogBody>
    </Dialog>
  );
}

export default Modal;
