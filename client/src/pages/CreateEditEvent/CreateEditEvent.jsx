import React from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import DatePick from "../../components/DatePick/DatePick"

const createNewEvent = function (e) {
  e.preventDefault();
  let newUser = {
    userName: e.target.username.value,
    ageRange: e.target.ageRange.value,
    bio: e.target.bio.value,
    email: e.target.newEmail.value,
    password: e.target.newPassword.value,
    image: e.target.profileImage.value,
    location: e.target.location.value,
  };
  if (e.target.ageCheck.value === "on") {
    axios
      .post("/api/users", newUser)
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
              <label htmlFor="username">Event Name</label>
              <input type="text" className="form-control" id="eventName" />
            </div>
            <div className="form-group">
              <label htmlFor="newEmail">Event Date:</label>
              
              <DatePick />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">Category</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="location">Game</label>
              <input type="text" className="form-control" id="location" />
            </div>
            <div className="form-group">
              <label htmlFor="profileImage">
                Add a link to your virtual event here!
              </label>
              <input type="text" className="form-control" id="profileImage" />
            </div>
            <div className="form-group">
              <label htmlFor="ageRange">Max attendees</label>
              <select className="form-control" id="ageRange">
                <option value="" className="disabled">
                  What is the max number of attendees you would like
                </option>
                <option value="13-18">13-18</option>
                <option value="19-25">19-25</option>
                <option value="25-39">25-39</option>
                <option value="40-54">40-54</option>
                <option value="55+">55+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bio">Description</label>
              <textarea className="form-control" id="bio" rows="3"></textarea>
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
