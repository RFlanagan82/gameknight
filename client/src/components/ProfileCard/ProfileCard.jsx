import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const ProfileCard = ({ user, toggleProfileModal }) => {
  return (
    <Card className="mx-auto sticky-top mt-3 bg-secondary knight-font">
      <Card.Header as="h5" className="text-center header">
        <u>My Profile</u>
      </Card.Header>
      <Card.Body className="text-center text-white">
        <Row>
          <Image
            className="avatar justify-content-md-center"
            src={user.image}
            thumbnail
          />
        </Row>
        <h1 className="username header"><Image className="mr-1 mb-1" style={{height: 25}} src="images/sword.png" />{user.userName}<Image className="ml-1 mb-1" style={{height: 25}} src="images/sword.png" /></h1>
        <Card.Text>
          <b>Age Range:</b> {user.ageRange}
        </Card.Text>
        <Card.Text>
          <b>Bio:</b> {user.bio}
        </Card.Text>
          <Button variant="warning mx-2" onClick={toggleProfileModal}>
          <i className="far fa-edit mr-1"></i>Edit
          </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
