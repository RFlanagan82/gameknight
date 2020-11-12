import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";

const HostingEventCard = ({
  event,
  setNewEvent,
  getHostedEvents,
  toggleEventModal,
}) => {
  const handleDelete = function (id) {
    console.log(id);
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
        getHostedEvents();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className="mx-4">
      <Card.Header as="h5" className="text-center">
        {event.eventName}
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          <b>Date:</b> {moment(event.date).format("LL")}
        </Card.Text>
        <Card.Text>
          <b>Time:</b> {moment(event.gameTime).format("LT")}
        </Card.Text>
        <Card.Text>
          <b>Event Host:</b> {event.hostID}
        </Card.Text>
        <Card.Text>
          <b>Category:</b> {event.gameCategory}
        </Card.Text>
        <Card.Text>
          <b>Game:</b> {event.gameName}
        </Card.Text>
        <Card.Text>
          <b>City:</b> {event.city}
        </Card.Text>
        <Card.Text>
          <b>State:</b> {event.state}
        </Card.Text>
        <Card.Text>
          <b>Users Attending:</b> {event.attendees.length}
        </Card.Text>
        <Card.Text>
          <b>Spots Left:</b> {event.maxAttendees - event.attendees.length}
        </Card.Text>
        <Card.Text>
          <b>Description:</b> {event.description}
        </Card.Text>
        <Card.Text>
        <b>Event Link:</b> <a href={event.eventLink}>{event.eventLink}</a>
        </Card.Text>
        <Button
          variant="warning"
          onClick={(e) => {
            setNewEvent(event);
            toggleEventModal();
          }}
        >
          Edit
        </Button>
        <Button
          className="ml-2"
          variant="warning"
          onClick={(e) => handleDelete(event._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HostingEventCard;
