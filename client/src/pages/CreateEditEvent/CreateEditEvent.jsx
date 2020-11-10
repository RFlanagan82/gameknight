import React from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import DatePick from "../../components/DatePick/DatePick";
import TimePick from "../../components/TimePick/TimePick";
import Form from "react-bootstrap/Form";

const createNewEvent = function (e) {
  e.preventDefault();
  console.log(e.target.date.value);
  let newUser = {
    eventName: e.target.eventName.value,
    date: e.target.date.value,
    gameCategory: e.target.gameCategory.value,
    gameName: e.target.gameName.value,
    gameTime: e.target.gameTime.value,
    description: e.target.description.value,
    eventLink: e.target.eventLink.value,
    maxAttendees: e.target.maxAttendees.value,
  };
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

const CreateEditEvent = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <Form onSubmit={(e) => createNewEvent(e)}>
            <h1>Create New Event</h1>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              {/* <div><span style={{color: "red", fontSize: 10}}>WERE DOBIS PR</span></div> */}
              <Form.Control type="text" required placeholder="Event Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Date:</Form.Label>
              <DatePick id="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Event Time:</Form.Label>
              <TimePick id="gameTime" />
            </Form.Group>
            <Form.Group controlId="gameCategory">
              <Form.Label>Category</Form.Label>
              {/* <div><span style={{color: "red", fontSize: 10}}>WERE DOBIS PR</span></div> */}
              <Form.Control type="text" required placeholder="Category" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="gameName">
              <Form.Label>Game</Form.Label>
              {/* <div><span style={{color: "red", fontSize: 10}}>WERE DOBIS PR</span></div> */}
              <Form.Control type="text" required placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="eventLink">
              <Form.Label>Add a link to your virtual event here!</Form.Label>
              {/* <div><span style={{color: "red", fontSize: 10}}>WERE DOBIS PR</span></div> */}
              <Form.Control type="text" required placeholder="Event Link" />
            </Form.Group>
            <div>
              <label htmlFor="maxAttendees">Max attendees</label>
              <input
                type="number"
                className="form-control"
                id="maxAttendees"
                min="1"
              />
            </div>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              {/* <div><span style={{color: "red", fontSize: 10}}>WERE DOBIS PR</span></div> */}
              <Form.Control
                required
                placeholder="Event Name"
                type="text"
                rows="3"
              ></Form.Control>
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default CreateEditEvent;
