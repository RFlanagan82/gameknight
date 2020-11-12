import React, { useState, useContext } from "react";
import axios from "axios";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import Container from "../../components/Container/Container";
import DatePick from "../../components/DatePick/DatePick";
import TimePick from "../../components/TimePick/TimePick";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/AlertContext";
import Alert from "../../components/Alert/Alert";
import "./CreateEditEvent.css";

const CreateEditEvent = () => {
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    date: "",
    gameCategory: "",
    gameName: "",
    gameTime: "",
    description: "",
    eventLink: "",
    maxAttendees: "",
  });

  const history = useHistory();
  const { setAlert } = useContext(AlertContext);

  const createNewEvent = function (e) {
    e.preventDefault();
    axios
      .post("/api/events", newEvent)
      .then((res) => {
        console.log(res.data);
        history.push("/Dashboard");
      })
      .catch((err) => {
        setAlert({ message: "Could not create new event.", type: "danger" });
      });
  };

  const setDateTime = (date) => {
    setNewEvent({ ...newEvent, date });
  };
  const setGameTime = (gameTime) => {
    setNewEvent({ ...newEvent, gameTime });
  };
  return (
    <>
      <ContainerFluid className="createEventContainer">
        <Container className="p-5">
          <Alert />
          <Card className="createEventCard">
            <Card.Body>
              <Form onSubmit={(e) => createNewEvent(e)}>
                <Card.Header className="text-center">
                  <h2>
                    <b>Create New Event</b>
                  </h2>
                </Card.Header>
                <Form.Group controlId="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Event Name"
                    value={newEvent.eventName}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        eventName: e.currentTarget.value,
                      })
                    }
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Event Date: &nbsp; </Form.Label>
                  <DatePick
                    id="date"
                    value={newEvent.date}
                    setDateTime={setDateTime}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Event Time: &nbsp; </Form.Label>
                  <TimePick
                    id="gameTime"
                    value={newEvent.gameTime}
                    setGameTime={setGameTime}
                  />
                </Form.Group>
                <Form.Group controlId="gameCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Game Category"
                    value={newEvent.gameCategory}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        gameCategory: e.currentTarget.value,
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="gameName">
                  <Form.Label>Game</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Game Name"
                    value={newEvent.gameName}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        gameName: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="eventLink">
                  <Form.Label>
                    Add a link to your virtual event here!
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Event Link"
                    value={newEvent.eventLink}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        eventLink: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="maxAttendees">
                  <Form.Label>Max attendees</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min="1"
                    placeholder="1"
                    value={newEvent.maxAttendees}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        maxAttendees: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>

                  <Form.Control
                    required
                    type="text"
                    as="textarea"
                    placeholder="Event description"
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        description: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="text-center">
                  <Button type="submit" className="align-items-md-center">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </ContainerFluid>
    </>
  );
};

export default CreateEditEvent;
