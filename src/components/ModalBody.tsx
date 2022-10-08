import React from "react";
import { Modal } from "react-bootstrap";
import { FC } from "react";

type ModalBodyprops = {
  body: string;
};

export const ModalBody: FC<ModalBodyprops> = ({ body }) => {
  return (
    <div>
      <Modal.Body>{body}</Modal.Body>
    </div>
  );
};
