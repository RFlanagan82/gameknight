import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const modal = ({showmodal,togglemodal}) => {
    
    return (
        <>
          <Modal show={showmodal} onHide={togglemodal} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={togglemodal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };
    
export default modal;