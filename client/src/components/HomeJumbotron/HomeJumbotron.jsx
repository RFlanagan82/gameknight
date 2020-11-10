import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "../Container/Container";
import "./HomeJumbotron.css";
import logo from "../../images/gameknightlogo.png";

const Jumbo = () => {
  return (
    <Jumbotron fluid className="home-jumbotron">
      <Container>
        <div className="text-center">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
