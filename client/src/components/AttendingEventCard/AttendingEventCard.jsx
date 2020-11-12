import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";

const AttendingEventCard = (props) => {

const handleWithdraw= (id) => {
 axios.put(`/api/attend/remove/${id}`)
 .then((results) => {console.log(results.data)
props.getAttendingEvents()})
.catch( err => (console.log(err))
)};

  return (
    <Card className="mx-4">
      <Card.Header as="h5" className="text-center">
        {props.eventName}
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Text>
          <b>Date:</b> {moment(props.date).format("LL")}
        </Card.Text>
        <Card.Text>
          <b>Time:</b> {moment(props.gameTime).format("LT")}
        </Card.Text>
        <Card.Text>
          <b>Event Host:</b> {props.hostID}
        </Card.Text>
        <Card.Text>
          <b>Category:</b> {props.gameCategory}
        </Card.Text>
        <Card.Text>
          <b>Game:</b> {props.gameName}
        </Card.Text>
        <Card.Text>
          <b>City:</b> {props.city}
        </Card.Text>
        <Card.Text>
          <b>State:</b> {props.state}
        </Card.Text>
        <Card.Text>
          <b>Spots Left:</b> {props.maxAttendees}
        </Card.Text>
        <Card.Text>
          <b>Description:</b> {props.description}
        </Card.Text>
        <Card.Text>
          <b>Event Link:</b> {props.eventLink}
        </Card.Text>
        <Button variant="primary" onClick={(e) => handleWithdraw(props._id)}>Withdraw</Button>
      </Card.Body>
    </Card>
  );
};

export default AttendingEventCard;
