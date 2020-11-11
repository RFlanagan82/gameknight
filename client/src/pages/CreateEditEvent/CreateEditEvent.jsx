import React, { useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import DatePick from "../../components/DatePick/DatePick";
import TimePick from "../../components/TimePick/TimePick";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateEditEvent = () => {
  const createNewEvent = function (e) {
    e.preventDefault();
    console.log(e.target.date.value);
    // let newUser = {
    //   eventName: e.target.eventName.value,
    //   date: e.target.date.value,
    //   gameCategory: e.target.gameCategory.value,
    //   gameName: e.target.gameName.value,
    //   gameTime: e.target.gameTime.value,
    //   description: e.target.description.value,
    //   eventLink: e.target.eventLink.value,
    //   maxAttendees: e.target.maxAttendees.value,
    // };
    if (e.target.ageCheck.value === "on") {
      axios
        .post("/api/events", newUser)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      // TODO: add some kind of validation to throw an alert/modal if the user does not check box
    }
  };

  const [newEvent, setnewEvent] = useState({
    eventName: "",
    date: "",
    gameCategory: "",
    gameName: "",
    gameTime: "",
    description: "",
    eventLink: "",
    maxAttendees: "",
  });
  const setGameTime = (gameTime) => {
    setnewEvent({ ...newEvent, gameTime: gameTime });
  };
  const setDate = (date) => {
    setnewEvent({ ...newEvent, date: date });
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
                  setnewEvent({ ...newEvent, eventName: e.currentTarget.value })
                }
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Date: </Form.Label>
              <DatePick id="date" value={state.date} setGameTime={setDate} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Time: </Form.Label>
              <TimePick
                id="gameTime"
                value={state.gameTime}
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
                  setnewEvent({
                    ...newEvent,
                    gameCategory: e.currentTarget.value,
                  })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="gameName">
              <Form.Label>Game</Form.Label>

              <Form.Control type="text" required placeholder="Game Name" />
            </Form.Group>
            <Form.Group controlId="eventLink">
              <Form.Label>Add a link to your virtual event here!</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event Link"
                value={newEvent.eventLink}
                onChange={(e) =>
                  setnewEvent({ ...newEvent, eventLink: e.currentTarget.value })
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
                  setnewEvent({
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
                  setnewEvent({
                    ...newEvent,
                    description: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="form-group form-check">
              <Form.Check
                type="checkbox"
                className="form-check-input"
                id="ageCheck"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Label className="form-check-label" htmlFor="ageCheck">
                I confirm that I am at least 13 years old.
              </Form.Label>
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default CreateEditEvent;
