import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "../Container/Container";
import "./EventJumbo.css";

const EventJumbo = () => {
    return (
        <Jumbotron fluid className="event-jumbotron mb-0">
            <Container>
                    <div className="text-center eventjumboheader">
                        <h1 className="knight-font eventjumboheader">Event Registry</h1>
                    </div>
            </Container>
        </Jumbotron>
    )
}

export default EventJumbo;


