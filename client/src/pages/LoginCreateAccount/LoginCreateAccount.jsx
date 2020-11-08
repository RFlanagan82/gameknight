import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./LoginCreateAccount.css";
import axios from "axios";

const CreateAccount = () => {
  const [loginDisplay, setLoginDisplay] = useState("col-sm-6 my-4 show");
  const [newUserDisplay, setNewUserDisplay] = useState("col-sm-6 my-4 hide");

  const showNewUserForm = function () {
    setLoginDisplay("col-sm-6 my-4 hide");
    setNewUserDisplay("col-sm-6 my-4 show");
  };
  const showLoginForm = function () {
    setLoginDisplay("col-sm-6 my-4 show");
    setNewUserDisplay("col-sm-6 my-4 hide");
  };

  const loginUser = function(e) {
    e.preventDefault();
    console.log("Login clicked")
    // TODO: add login functionality once user validation is added
  }

  const createNewUser = function (e) {
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

  return (
    <>
      <Jumbotron />
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <div className={loginDisplay}>
            <form onSubmit={(e) => loginUser(e)}>
              <h1>Login</h1>
              <div className="form-group mt-4">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <Link to="/login" onClick={showNewUserForm}>
                  Don't have an account? Create one here!
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className={newUserDisplay}>
            <form onSubmit={(e) => createNewUser(e)}>
              <h1>Create Account</h1>
              <div className="form-group mt-4">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="newEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="newEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="location">Location (City, State)</label>
                <input type="text" className="form-control" id="location" />
              </div>
              <div className="form-group">
                <label htmlFor="profileImage">
                  Want to add a profile image? Enter the link here!
                </label>
                <input type="text" className="form-control" id="profileImage" />
              </div>
              <div className="form-group">
                <label htmlFor="ageRange">Age Range</label>
                <select className="form-control" id="ageRange">
                  <option value="" className="disabled">
                    Choose your age range
                  </option>
                  <option value="13-18">13-18</option>
                  <option value="19-25">19-25</option>
                  <option value="25-39">25-39</option>
                  <option value="40-54">40-54</option>
                  <option value="55+">55+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bio">About Me</label>
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
              <div className="form-group">
                <Link to="/login" onClick={showLoginForm}>
                  Already have an account? Login here!
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {/* CODE FOR FILE UPLOAD BELOW FOR FUTURE USE */}
              {/* <div className="form-group">
                <label htmlFor="profileImage">Upload your profile image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="profileImage"
                />
              </div> */}
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CreateAccount;
