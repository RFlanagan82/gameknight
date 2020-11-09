import React from "react";
import "./Profile.css";
// import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Card className="mx-auto" style={{width: "40rem"}}>
          <Card.Header as="h5" className="text-center">
            My Profile
          </Card.Header>
          <Card.Body className="text-center">
            <Row>
                <Image
                  className="avatar justify-content-md-center"
                  src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/gxdr5aesylxo7pixbdfx/venom-you-die"
                  thumbnail
                />
            </Row>
            <h1 className="username">Username</h1>
            <Card.Text><b>Age Range:</b> XX-XX</Card.Text>
            <Card.Text>
              <b>Bio:</b> The path of the righteous man is beset on all sides by the
              inequities of the selfish and the tyranny of evil men. Blessed is
              he who, in the name of charity and good will, shepherds the weak
              through the valley of the darkness. For he is truly his brother’s
              keeper and the finder of lost children. And I will strike down
              upon thee with great vengeance and furious anger those who attempt
              to poison and destroy my brothers. And you will know I am the Lord
              when I lay my vengeance upon you.
            </Card.Text>
            <Button variant="primary">Edit Profile</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Profile;
