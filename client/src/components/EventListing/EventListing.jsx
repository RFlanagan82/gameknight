import React, { useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function EventListing(props) {
  const { jwt } = useContext(AuthContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const handleJoin = (id) => {
    if (!jwt) {
      history.push("/login");
    } else {
      axios
        .put(`/api/attend/add/${id}`)
        .then((results) => {
          toggleModal();
        })
        .catch((err) => console.log(err));
    }
  };

  const toggleModal = function () {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card className="bg-secondary">
        <Card.Header className="text-white">
          <h3 className="eventName">Event Title: {props.eventName}</h3>
          <h5 className="gameName">Game Name: {props.gameName}</h5>
          <p className="date">Event Date: {props.date}</p>
          <p className="date">Event Time: {props.gameTime}</p>
          <Accordion.Toggle
            as={Button}
            variant="warning"
            eventKey={props.eventkey}
          >
            Learn More!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.eventkey}>
          <Card.Body className="text-white">
            <p className="category">Category: {props.category}</p>
            <p className="description">Description: {props.description}</p>
            <p className="maxAttendees">Max Attendees: {props.maxAttendees}</p>
            <p className="eventLink">Event Link: {props.eventLink}</p>
            <Button
              variant="warning"
              onClick={(e) => handleJoin(props.eventkey)}
            >
              Join
            </Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Modal
        showModal={showModal}
        toggleModal={toggleModal}
        title="Success!"
        body="You've been added to the event!"
      />
    </>
  );
}

export default EventListing;
