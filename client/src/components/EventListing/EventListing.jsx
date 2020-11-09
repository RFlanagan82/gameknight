import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function EventListing(props) {
  return (
    <>
        <Card>
          <Card.Header>
              <h3 className="eventName">{props.eventName}</h3>
              <h5 className="gameName">{props.gameName}</h5>
              <h5 className="date">{props.date}</h5>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Learn More!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <p className="category">{props.category}</p>
                <p className="description">{props.description}</p>
                <p className="maxAttendees">{props.maxAttendees}</p>
                <p className="eventLink">{props.eventLink}</p>
                <Button variant="success">Join</Button>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </>
  );
}

export default EventListing;
