import React, { useState, useContext } from "react";
import axios from "axios";
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
const usStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


const CreateEditEvent = () => {
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    date: "",
    isVirtual: "",
    gameCategory: "",
    gameName: "",
    gameTime: "",
    description: "",
    eventLink: "",
    maxAttendees: "",
    city: "",
    state: "",
  });

  const history = useHistory();
  const { setAlert } = useContext(AlertContext);

  const createNewEvent = function (e) {
    e.preventDefault();
    axios
      .post("/api/events", newEvent)
      .then((res) => {
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
        <Container className="createEventContainer">
          <Alert />
          <Card className="createEventCard text-white knight-font">
            <Card.Body className="bg-secondary">
              <Form onSubmit={(e) => createNewEvent(e)}>
                <Card.Header className="text-center header">
                  <h2>
                    <u>Create New Event</u>
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
                <Form.Group controlId="isVirtual">
                    <Form.Label>Virtual or In Person?</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={newEvent.isVirtual}
                      onChange={(e) =>
                        setNewEvent({
                          ...newEvent,
                          isVirtual: e.currentTarget.value,
                        })
                      }
                    >
                      <option value="" className="disabled"></option>
                      <option value="Virtual">Virtual</option>
                      <option value="In Person">In Person</option>
                    </Form.Control>
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
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    value={newEvent.city}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        city: e.currentTarget.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="loginText" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                  as="select"
                    placeholder="State"
                    value={newEvent.state}
                    onChange={(e) =>
                      setNewEvent({
                        ...newEvent,
                        state: e.currentTarget.value,
                      })
                    }
                  >
                    <option value="">
                      Optional
                    </option>
                    {usStates.map((eventaroo, index) => (
                      <option key={index} value={eventaroo}>{eventaroo}</option>
                    ))}
                    
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="eventLink">
                  <Form.Label>Add a link to your event here!</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
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
                  <Button
                    type="submit"
                    className="align-items-md-center knight-font"
                    variant="warning"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
    </>
  );
};

export default CreateEditEvent;
