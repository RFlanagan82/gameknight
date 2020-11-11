import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

const HostingEventCard = (props) => {
  const handleDelete = function (id) {
    console.log(id)
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
        props.getHostedEvents();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-4">
      <Card.Header as="h5" className="text-center">
        {props.eventName}
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          <b>Date:</b> {props.date}
        </Card.Text>
        <Card.Text>
          <b>Time:</b> {props.gameTime}
        </Card.Text>
        <Card.Text>
          <b>Event Host:</b> {props.hostID}
        </Card.Text>
        <Card.Text>
          <b>Category:</b> {props.gameCategory}
        </Card.Text>
        <Card.Text>
          <b>Game:</b> {props.gameName}
        </Card.Text>
        <Card.Text>
          <b>Spots Left:</b> {props.maxAttendees}
        </Card.Text>
        <Card.Text>
          <b>Description:</b> {props.description}
        </Card.Text>
        <Card.Text>
          <b>Event Link:</b> {props.eventLink}
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button
          className="ml-2"
          variant="primary"
          onClick={(e) => handleDelete(props._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HostingEventCard;
