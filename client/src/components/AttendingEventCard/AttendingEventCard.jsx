import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import ProfileCardModal from "../../components/ProfileCardModal/ProfileCardModal";
import "./AttendingEventCard.css"

const AttendingEventCard = ({ event, getHostedEvents, getAttendingEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const handleWithdraw = (id) => {
    axios
      .put(`/api/attend/remove/${id}`)
      .then((results) => {
        getAttendingEvents();
        getHostedEvents();
      })
      .catch((err) => console.log(err));
  };
  const toggleModal = function () {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card className="mx-4 bg-secondary knight-font">
        <Card.Header as="h5" className="text-center header">
          <u>{event.eventName}</u>
        </Card.Header>
        <Card.Body className="text-center text-white">
          <Card.Text className="text-center text-white">
            {event.isVirtual}
          </Card.Text>
          <Card.Text>
            <h5>{moment(event.date).format("LL")} at {" "} {moment(event.gameTime).format("LT")}</h5> 
          </Card.Text>
          <Card.Text>
            <h5>{event.city}{","}{event.state}</h5> 
          </Card.Text>
          <Card.Text>
            <b>Event Host:</b>{" "}
            <Button
              variant="link"
              onClick={(e) => {
                setUser(event.hostID);
                toggleModal();
              }}
            >
              {event.hostID.userName}
            </Button>
          </Card.Text>
          <Card.Text>
            <b>Category:</b> {event.gameCategory}
          </Card.Text>
          <Card.Text>
            <b>Game:</b> {event.gameName}
          </Card.Text>
          <Card.Text>
            <b>Users Attending:</b>
            {event.attendees.map((user, index) => (
              <Button
                key={index}
                variant="link"
                onClick={(e) => {
                  setUser(user);
                  toggleModal();
                }}
              >
                {user.userName}
              </Button>
            ))}
          </Card.Text>
          <Card.Text>
            <b>Spots Left:</b> {event.maxAttendees - event.attendees.length}
          </Card.Text>
          <Card.Text>
            <b>Description:</b> {event.description}
          </Card.Text>
          <Card.Text>
            <b>Event Link:</b> <a id="attendeventlink" href={event.eventLink}>{event.eventLink}</a>
          </Card.Text>
          <Button className="maroonbtn" onClick={(e) => handleWithdraw(event._id)}>
            Withdraw
          </Button>
        </Card.Body>
      </Card>
      <ProfileCardModal
        user={user}
        showModal={showModal}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default AttendingEventCard;
