import React from "react";
import teamjson from "./team.json";
import Aboutcard from "./Aboutcard";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

const About = () => {
  return (
    <ContainerFluid className="aboutContainerFluid">
      <Container className="aboutContainer">
        <Row>
          {teamjson.map((card) => (
            <Aboutcard {...card} />
          ))}
        </Row>
      </Container>
    </ContainerFluid>
  );
};

export default About;
