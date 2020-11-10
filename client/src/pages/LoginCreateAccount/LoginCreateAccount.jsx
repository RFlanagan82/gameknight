import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import "./LoginCreateAccount.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateAccount = () => {
  const [loginDisplay, setLoginDisplay] = useState("col-sm-6 my-4 show");
  const [newUserDisplay, setNewUserDisplay] = useState("col-sm-6 my-4 hide");
  const [loginValidated, setLoginValidated] = useState(false);
  const [createValidated, setCreateValidated] = useState(false);

  useEffect(() => {
    setLoginDisplay("col-sm-6 my-4 show");
    setNewUserDisplay("col-sm-6 my-4 hide");
  }, []);

  const showNewUserForm = function () {
    setLoginDisplay("col-sm-6 my-4 hide");
    setNewUserDisplay("col-sm-6 my-4 show");
  };
  const showLoginForm = function () {
    setLoginDisplay("col-sm-6 my-4 show");
    setNewUserDisplay("col-sm-6 my-4 hide");
  };

  const loginUser = function (e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setLoginValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      console.log("USER LOGIN");
      // TODO: add login functionality once user validation is added
    }
  };

  const createNewUser = function (e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCreateValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      let newUser = {
        userName: form.username.value,
        ageRange: form.ageRange.value,
        bio: form.bio.value,
        email: form.newEmail.value,
        password: form.newPassword.value,
        image: form.profileImage.value,
        location: form.location.value,
      };
      axios
        .post("/api/users", newUser)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="col-sm-3"></div>
          <div className={loginDisplay}>
            <h1>Login</h1>
            <Form noValidate validated={loginValidated} onSubmit={loginUser}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Link to="/login" onClick={showNewUserForm}>
                  Don't have an account? Create one here!
                </Link>
              </Form.Group>
              <Button type="submit" id="submitbtn">Submit</Button>
            </Form>
          </div>
          <div className={newUserDisplay}>
            <h1>Create Account</h1>
            <Form noValidate validated={createValidated} onSubmit={createNewUser}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="newEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="City, State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid location.
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.File
                    id="custom-file"
                    label="Custom file input"
                    custom
                  /> */}
              <Form.Group controlId="profileImage">
                <Form.Label>
                  Want to add a profile image? Enter the link here!
                </Form.Label>
                <Form.Control required type="text" placeholder="Enter URL" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="ageRange">
                <Form.Label>Age</Form.Label>
                <Form.Control required as="select" custom>
                  <option value="" className="disabled">
                    Choose your age range
                  </option>
                  <option value="13-18">13-18</option>
                  <option value="19-25">19-25</option>
                  <option value="25-39">25-39</option>
                  <option value="40-54">40-54</option>
                  <option value="55+">55+</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select an age range.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>About Me</Form.Label>
                <Form.Control required as="textarea" rows={3} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  required
                  label="I confirm that I am at least 13 years old."
                  feedback="You must confirm before submitting."
                />
              </Form.Group>
              <Form.Group>
                <Link to="/login" onClick={showLoginForm}>
                  Already have an account? Login here!
                </Link>
              </Form.Group>
              <Button type="submit" id="submitbtn">Submit</Button>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CreateAccount;
