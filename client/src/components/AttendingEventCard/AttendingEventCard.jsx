import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "../../components/Row/Row";

const AttendingEventCard = () => {
  return (
    <Row>
    <Card className="mx-4">
      <Card.Header as="h5" className="text-center">
        Event Name
      </Card.Header>
      <Card.Body className="text-center">
          <Card.Text>
            <b>Date:</b> 00/00/0000
          </Card.Text>
          <Card.Text>
            <b>Event Host:</b> Jeff Goldblum
          </Card.Text>
          <Card.Text>
            <b>Category:</b> Eventaroo
          </Card.Text>
          <Card.Text>
            <b>Game:</b> Magic: The Gathering
          </Card.Text>
          <Card.Text>
            <b>Spots Left:</b> X
          </Card.Text>
          <Card.Text>
            <b>Description:</b> Come on down and play Magic with ya boy!
          </Card.Text>
          <Card.Text>
            <b>Event Link:</b> chillstuff.com
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <Button className="ml-2"variant="primary">Cancel</Button>
      </Card.Body>
    </Card>
    </Row>
  );
};

export default AttendingEventCard;
