import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import axios from "axios";

const ProfileCard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    axios
      .get("/api/users/dashboard")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

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
        <Button variant="primary">Edit Profile</Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
