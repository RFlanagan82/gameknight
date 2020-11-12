import React, { useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import moment from "moment";

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
          <h2 className="eventName"><b>{props.eventName}</b></h2>
          <h4 className="gameName"><b>Game:</b> {props.gameName}</h4>
          <h6 className="date mb-3">{moment(props.date).format("LL")} @ {moment(props.gameTime).format("LT")}</h6>
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
            <p className="category"><b>Category</b> {props.category}</p>
            <p className="description"><b>Description:</b> {props.description}</p>
            <p className="city"><b>City:</b> {props.city}</p>
            <p className="state"><b>State:</b> {props.state}</p>
            <p className="maxAttendees"><b>Max Attendees:</b> {props.maxAttendees}</p>
            <p className="eventLink"><b>Event Link:</b> {props.eventLink}</p>
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
