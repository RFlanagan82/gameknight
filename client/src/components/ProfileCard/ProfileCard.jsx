import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";

const ProfileCard = ({ user, toggleProfileModal }) => {
  const history = useHistory();
  return (
    <Card className="mx-auto sticky-top mt-auto" style={{ width: "40rem" }}>
      <Card.Header as="h5" className="text-center">
        My Profile
      </Card.Header>
      <Card.Body className="text-center">
        <Row>
          <Image
            className="avatar justify-content-md-center"
            src={user.image}
            thumbnail
          />
        </Row>
        <h1 className="username">{user.userName}</h1>
        <Card.Text>
          <b>Age Range:</b> {user.ageRange}
        </Card.Text>
        <Card.Text>
          <b>Bio:</b> {user.bio}
        </Card.Text>

        <Card.Footer className="mt-auto">
          <Button variant="warning mx-2" onClick={toggleProfileModal}>
            Edit Profile
          </Button>
          <Button variant="warning mx-2" onClick={() => history.push("/create-event")}>
            Host Event
          </Button>
          <Button variant="warning mx-2"  onClick={() => history.push("/events")}>View All Events</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
