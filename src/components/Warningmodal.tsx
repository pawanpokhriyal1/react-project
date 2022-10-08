import React, { useState } from "react";
import { FC } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type ModalProps = {
  handleClose: () => void;
  show: boolean;
  // index: number;
  ondelFunc: () => void;
  elements: any;
};

export const Warningmodal: FC<ModalProps> = ({
  handleClose,
  show,
  // index,
  ondelFunc,
  elements,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body></Modal.Body> */}
        {React.Children.map(elements, (e, i) => {
          console.log(i, e);
          return e;
        })}
        <Modal.Footer>
          <Button variant="secondary" onClick={ondelFunc}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
