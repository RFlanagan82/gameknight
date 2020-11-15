import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import Row from "../../components/Row/Row";
import HomeJumbotron from "../../components/HomeJumbotron/HomeJumbotron";
import "./Index.css";
import browseImg from "../../images/attending.jpg";
import hostImg from "../../images/hosting.jpg";

const Index = () => {
  return (
    <>
      <HomeJumbotron />
      <ContainerFluid className="indexContainerFluid">
      <Container className="indexContainer">
        <Row>
          <div className="col-sm-12 text-center my-5">
            <h1 className="text-white knight-font">Stuck at home and bored?</h1>
            <h1 className="text-white knight-font">Don't make it a lame night, make it a Game Knight!</h1>
          </div>
        </Row>
        <Row>
          <div className="col-sm-6 text-center mb-5">
            <Link to="/create-event">
              <div className="card bg-dark">
                <img src={hostImg} className="card-img" alt="monopoly" />
              </div>
            </Link>
          </div>
          <div className="col-sm-6 text-center mb-5">
            <Link to="/events">
              <div className="card bg-dark">
                <img src={browseImg} className="card-img" alt="monopoly" />
              </div>
            </Link>
          </div>
        </Row>
      </Container>

      </ContainerFluid>

    </>
  );
};

export default Index;
