import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "../Container/Container";
import "./Jumbotron.css";

const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Title</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
