import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./CreateAccount.css";

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

  return (
    <>
      <Jumbotron />
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <div className={loginDisplay}>
            <form>
              <h1>Login</h1>
              <div className="form-group mt-4">
                <label for="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <Link onClick={showNewUserForm}>
                  Don't have an account? Create one here!
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className={newUserDisplay}>
            <form>
              <h1>Create Account</h1>
              <div className="form-group mt-4">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label for="newEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="newEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="newPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                />
              </div>
              <div className="form-group mt-4">
                <label for="location">Location (City, State)</label>
                <input type="text" className="form-control" id="location" />
              </div>
              <div className="form-group">
                <label for="profileImage">
                  Want to add a profile image? Enter the link here!
                </label>
                <input type="text" className="form-control" id="profileImage" />
              </div>
              <div className="form-group">
                <label for="ageRange">Age Range</label>
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
                <label for="bio">About Me</label>
                <textarea className="form-control" id="bio" rows="3"></textarea>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="ageCheck"
                />
                <label className="form-check-label" for="ageCheck">
                  I confirm that I am at least 13 years old.
                </label>
              </div>
              <div className="form-group">
                <Link onClick={showLoginForm}>
                  Already have an account? Login here!
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {/* CODE FOR FILE UPLOAD BELOW FOR FUTURE USE */}
              {/* <div className="form-group">
                <label for="profileImage">Upload your profile image</label>
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
