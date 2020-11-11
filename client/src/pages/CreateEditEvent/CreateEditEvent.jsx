import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import DatePick from "../../components/DatePick/DatePick";
import TimePick from "../../components/TimePick/TimePick";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

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

  const createNewEvent = function (e) {
    e.preventDefault();
    axios
      .post("/api/events", newEvent)
      .then((res) => {
        console.log(res.data);
        history.push("/Dashboard");
      })
      .catch((err) => console.log(err));
  };

  const setDateTime = (date) => {
    setNewEvent({ ...newEvent, date });
  };
  const setGameTime = (gameTime) => {
    setNewEvent({ ...newEvent, gameTime });
  };
  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <Form onSubmit={(e) => createNewEvent(e)}>
            <h1>Create New Event</h1>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event Name"
                value={newEvent.eventName}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, eventName: e.currentTarget.value })
                }
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Date: </Form.Label>
              <DatePick
                id="date"
                value={newEvent.date}
                setDateTime={setDateTime}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Time: </Form.Label>
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
              <Form.Label>Add a link to your virtual event here!</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event Link"
                value={newEvent.eventLink}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, eventLink: e.currentTarget.value })
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

            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default CreateEditEvent;
