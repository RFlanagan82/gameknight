import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";


const NotFound = () => {

  return (
    <Container>
      <Row>
        <div className="col-sm-12 "></div>
      </Row>
      <Row>
        <div className="col-sm-12 imgdiv mt-5">
          <div className="card errcard">
            <div className="card-header">
              404 - Page Not Found My Good Knight!
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>
                  "Well, on second thought, let's not go there. 'Tis a silly
                  place."
                </p>
                <footer className="blockquote-footer">
                  Arthur - King of the Britons{" "}
                  <cite title="Source Title">
                    Monty Python & The Holy Grail
                  </cite>
                </footer>
              </blockquote>
            </div>
            <Link to="/" role="button" className="btn btn-dark errbtn">
              Return to Safety
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
