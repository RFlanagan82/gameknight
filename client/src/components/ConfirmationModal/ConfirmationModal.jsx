import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmationModal = ({ showModal, toggleModal, title, body, confirmFunction }) => {
  return (
    <>
      <Modal show={showModal} onHide={toggleModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={toggleModal}>
            Cancel
          </Button>
          <Button className="maroonbtn" onClick={confirmFunction}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
