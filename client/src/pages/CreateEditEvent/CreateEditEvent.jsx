import React from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import DatePick from "../../components/DatePick/DatePick"
import TimePick from "../../components/TimePick/TimePick"

const createNewEvent = function (e) {
  e.preventDefault();
  console.log(e.target.date.value)
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
      <Jumbotron />
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <form onSubmit={(e) => createNewEvent(e)}>
            <h1>Create New Event</h1>
            <div className="form-group mt-4">
              <label htmlFor="eventName">Event Name</label>
              <input type="text" className="form-control" id="eventName" />
              <span style={{color: "red"}}>WERE DOBIS PR</span>
            </div>
            <div className="form-group">
              <label htmlFor="date">Event Date:</label>
              <DatePick id="date"/>
            </div>
            <div className="form-group">
              <label htmlFor="gameTime">Event Time:</label>
              <TimePick id="gameTime"/>
            </div>
            <div className="form-group">
              <label htmlFor="gameCategory">Category</label>
              <input
                type="text"
                className="form-control"
                id="gameCategory"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="gameName">Game</label>
              <input type="text" className="form-control" id="gameName" />
            </div>
            <div className="form-group">
              <label htmlFor="eventLink">
                Add a link to your virtual event here!
              </label>
              <input type="text" className="form-control" id="eventLink" />
            </div>
            <div className="form-group">
              <label htmlFor="maxAttendees">Max attendees</label>
              <input type="number" className="form-control" id="maxAttendees" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" rows="3"></textarea>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="ageCheck"
              />
              <label className="form-check-label" htmlFor="ageCheck">
                I confirm that I am at least 13 years old.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default CreateEditEvent;
