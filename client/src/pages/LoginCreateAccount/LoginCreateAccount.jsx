import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import Row from "../../components/Row/Row";
import "./LoginCreateAccount.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/AuthContext";
import AlertContext from "../../context/AlertContext";
import { useHistory } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
const usStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


const CreateAccount = () => {
  const [loginDisplay, setLoginDisplay] = useState("col-sm-6 my-4 show");
  const [newUserDisplay, setNewUserDisplay] = useState("col-sm-6 my-4 hide");
  const [loginValidated, setLoginValidated] = useState(false);
  const [createValidated, setCreateValidated] = useState(false);
  const [newUser, setNewUser] = useState({
    userName: "",
    ageRange: "",
    bio: "",
    email: "",
    password: "",
    image: "",
    city: "",
    state: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { setJwt } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const history = useHistory();

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
      axios
        .post("/api/login", login)
        .then((res) => {
          setJwt(res.data.data);
          history.push("/Dashboard");
        })
        .catch((err) => {
          console.log(err);
          setAlert({
            message: "Login failed. Please try again.",
            type: "danger",
          });
        });
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
      axios
        .post("/api/signup", newUser)
        .then((res) => {
          console.log(res.data);
          setJwt(res.data.data);
          history.push("/Dashboard");
        })
        .catch((err) => {
          console.log(err);
          setAlert({
            message: "Account creation failed. Please try again.",
            type: "danger",
          });
        });
    }
  };

  return (
    <>
      <ContainerFluid className="loginContainerFluid knight-font">
        <Container className="loginContainer">
          <Row>
            <Alert />
            <div className="col-sm-3"></div>
            <div className={loginDisplay}>
              <h1 className="headerText">Login</h1>
              <Form noValidate validated={loginValidated} onSubmit={loginUser}>
                <Form.Group className="loginText" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({ ...login, email: e.currentTarget.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({ ...login, password: e.currentTarget.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Link to="/login" className="checkText" onClick={showNewUserForm}>
                    Don't have an account? Create one here!
                  </Link>
                </Form.Group>
                <Button type="submit" variant="warning">Login</Button>
              </Form>
            </div>
            <div className={newUserDisplay}>
              <h1 className="headerText">Create Account</h1>
              <Form
                noValidate
                validated={createValidated}
                onSubmit={createNewUser}
              >
                <Form.Group className="loginText" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Username"
                    value={newUser.userName}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        userName: e.currentTarget.value,
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText" controlId="newEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.currentTarget.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group  className="loginText" controlId="newPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        password: e.currentTarget.value,
                      })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                  required
                    type="text"
                    placeholder="City"
                    required
                    value={newUser.city}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        city: e.currentTarget.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                  required
                  as="select"
                    placeholder="State"
                    required
                    value={newUser.state}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        state: e.currentTarget.value,
                      })
                    }
                  >
                    <option value="" className="disabled">
                      Select your state
                    </option>
                    {usStates.map((eventaroo, index) => (
                      <option key={index} value={eventaroo}>{eventaroo}</option>
                    ))}
                    
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                {/* <Form.File
                    id="custom-file"
                    label="Custom file input"
                    custom
                  /> */}
                <Form.Group className="loginText" controlId="profileImage">
                  <Form.Label>
                    Want to add a profile image? Enter the link here!
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter URL"
                    value={newUser.image}
                    onChange={(e) =>
                      setNewUser({ ...newUser, image: e.currentTarget.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText" controlId="ageRange">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom
                    value={newUser.ageRange}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        ageRange: e.currentTarget.value,
                      })
                    }
                  >
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
                <Form.Group className="loginText"controlId="bio">
                  <Form.Label>About Me</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    value={newUser.bio}
                    onChange={(e) =>
                      setNewUser({ ...newUser, bio: e.currentTarget.value })
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="loginText">
                  <Form.Check
                    required
                    label="I confirm that I am at least 13 years old."
                    feedback="You must confirm before submitting."
                  />
                </Form.Group>
                <Form.Group>
                  <Link to="/login" className="checkText" onClick={showLoginForm}>
                    Already have an account? Login here!
                  </Link>
                </Form.Group>
                <Button type="submit" variant="warning">Enter</Button>
              </Form>
            </div>
          </Row>
        </Container>
      </ContainerFluid>
    </>
  );
};

export default CreateAccount;
