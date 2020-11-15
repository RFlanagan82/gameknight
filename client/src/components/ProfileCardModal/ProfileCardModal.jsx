import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ProfileCardModal = ({ showModal, toggleModal, user }) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body className="text-center">
            <Row>
              <Image
                className="avatar justify-content-md-center"
                src={user.image}
                thumbnail
              />
            </Row>
            <h1 className="username header knight-font">
            <Image className="mr-1" style={{height: 25}} src="images/sword.png" /><b>{user.userName}<Image className="mr-1" style={{height: 25}} src="images/sword.png" /></b>
            </h1>
            <Card.Text>
              <b>Location:</b> {user.city}, {user.state}
            </Card.Text>
            <Card.Text>
              <b>Age Range:</b> {user.ageRange}
            </Card.Text>
            <Card.Text>
              <b>Bio:</b> {user.bio}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer className="mt-auto">
        <Button onClick={toggleModal} variant="warning">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileCardModal;
