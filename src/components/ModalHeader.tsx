import React from "react";
import Modal from "react-bootstrap/Modal";
import { FC } from "react";

type ModalHeaderprops = {
  title: string;
};

export const ModalHeader: FC<ModalHeaderprops> = ({ title }) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
    </div>
  );
};
