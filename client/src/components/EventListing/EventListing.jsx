import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function EventListing(props) {
  return (
    <>
        <Card>
          <Card.Header>
              <h3 className="eventName">Event Title: {props.eventName}</h3>
              <h5 className="gameName">Game Name: {props.gameName}</h5>
              <p className="date">Event Date: {props.date}</p>
            <Accordion.Toggle as={Button} variant="link" eventKey={props.eventkey}>
              Learn More!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.eventkey}>
            <Card.Body>
                <p className="category">Category: {props.category}</p>
                <p className="description">Description: {props.description}</p>
                <p className="maxAttendees">Max Attendees: {props.maxAttendees}</p>
                <p className="eventLink">Event Link: {props.eventLink}</p>
                <Button variant="success">Join</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </>
  );
}

export default EventListing;
