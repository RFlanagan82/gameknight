import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import ProfileCardModal from "../../components/ProfileCardModal/ProfileCardModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import "./AttendingEventCard.css"

const AttendingEventCard = ({ event, getHostedEvents, getAttendingEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const handleWithdraw = (id) => {
    axios
      .put(`/api/attend/remove/${id}`)
      .then((results) => {
        getAttendingEvents();
        getHostedEvents();
        setShowConfirm();
      })
      .catch((err) => console.log(err));
  };
  const toggleModal = function () {
    setShowModal(!showModal);
  };

  const toggleConfirm = function () {
    setShowConfirm(!showConfirm);
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
          {event.city && event.state ? <h5>{event.city}{", "}{event.state}</h5> : ""} 
          </Card.Text>
          <Card.Text>
            <b>Event Host:</b>{" "}
            <Button
              variant="link"
              id="attendeventlink"
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
                id="attendeventlink"
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
            {event.eventLink ? <><b>Event Link:</b> <a href={event.eventLink} target="_blank" id="hosteventlink" rel="noreferrer">{event.eventLink}</a></> : ""}
          </Card.Text>
          <Button className="maroonbtn" onClick={toggleConfirm}>
          <i className="fas fa-user-times mr-1"></i>Withdraw
          </Button>
        </Card.Body>
      </Card>
      <ProfileCardModal
        user={user}
        showModal={showModal}
        toggleModal={toggleModal}
      />
      <ConfirmationModal
        showModal={showConfirm}
        toggleModal={toggleConfirm}
        title="Leave Event"
        body={`Are you sure you no longer want to attend the "${event.eventName}" event?`}
        confirmFunction={(e) => handleWithdraw(event._id)}
      />
    </>
  );
};

export default AttendingEventCard;
